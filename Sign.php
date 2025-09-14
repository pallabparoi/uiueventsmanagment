<?php
$servername = "localhost:3306";
$username = "root";
$password = "";
$dbname = "emg";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to sanitize user input
function sanitizeInput($input)
{
    $input = trim($input);
    $input = stripslashes($input);
    $input = htmlspecialchars($input);
    return $input;
}

// Function to validate user login
function validateLogin($conn, $email, $password)
{
    $email = sanitizeInput($email);
    $password = sanitizeInput($password);

    // Use prepared statements to prevent SQL injection
    $stmt = $conn->prepare("SELECT * FROM user WHERE email = ? AND pass = ?");
    $stmt->bind_param("ss", $email, $password);

    // Execute the query
    $stmt->execute();

    // Get the result
    $result = $stmt->get_result();

    // Check if a row is returned
    if ($result->num_rows > 0) {
        return true; // Login successful
    } else {
        return false; // Login failed
    }

    $stmt->close();
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if email and password are set
    if (isset($_POST["email"]) && isset($_POST["password"])) {
        $email = $_POST["email"];
        $password = $_POST["password"];

        // Validate login
        if (validateLogin($conn, $email, $password)) {
            // Display a success message (you can use a modal or any other way you prefer)
            header("Location: Home2.php");
            exit();
        } else {
            // Display an error message (you can use a modal or any other way you prefer)
            echo '<script>alert("Login failed. Please check your credentials.");</script>';
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="sign.css">
    <title>Your Website</title>
</head>

<body>


    <header class="header0">
        <div>
            <img src="360_F_98261159_Po5JS7ds82XaePJIsG1MiEtHRzOeUPNj.png">eventuiu@uiu.ac.bd
        </div>
      </header>
    <header class="header">
        <img src="Screenshot 2023-11-20 042519.png">
        <nav class="nav-items">
          <a href="Home0.php">Home</a>
          <a href="#">Products</a>
          <a href="#">Events</a>
          <a href="add_notice.php">Add Notice+</a>
          <input type="text" placeholder="Search..">
        </nav>
      </header>
      <header class="header0">
        <div style="color: darkorange;">
            eventuiu@uiu.ac.bd
        </div>
      </header>

      <div class="container">
        <div class="signup"><h1>Log In</h1></div>
        <form name="registration" class="registartion-form" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
          <table>
            
            <tr>
              <td><label for="email">Email:</label></td>
              <td><input type="text" name="email" id="email" placeholder="your email"></td>
            </tr>
            <tr>
              <td><label for="password">Password:</label></td>
              <td><input type="password" name="password" id="password"></td>
            </tr>
            <tr>
              <td colspan="2"><input type="submit" class="submit" value="Log In" /></td>
            </tr>
          </table>
        </form>
        <a href="Registration.php">Don't have an account</a>
        <div class="intro">
          <a href="Registration.php"><button>Sign-Up</button></a>
        </div>
        <a href="">Forgot Password</a>
      </div>

      <footer class="footer">
        <div class="copy">&copy; 20.11.2023</div>
        <div class="bottom-links">
          <div class="links">
            <span>More Info</span>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <div class="links">
            <span>Social Links</span>
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </footer>
</body>
</html>