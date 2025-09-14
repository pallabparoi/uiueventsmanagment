
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

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if all required fields are set
    if (isset($_POST["date"]) && isset($_POST["notice_heading"]) && isset($_POST["notice_details"])) {
        $date = sanitizeInput($_POST["date"]);
        $noticeHeading = sanitizeInput($_POST["notice_heading"]);
        $noticeDetails = sanitizeInput($_POST["notice_details"]);

        // Insert data into the "notice" table
        $sql = "INSERT INTO notice (date, notice, `notice details`) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sss", $date, $noticeHeading, $noticeDetails);

        if ($stmt->execute()) {
            echo '<script>alert("Notice added successfully.");</script>';
        } else {
            echo '<script>alert("Error adding notice. Please try again.");</script>';
        }

        $stmt->close();
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
          <input type="text" placeholder="Search..">
        </nav>
      </header>
      <header class="header0">
        <div style="color: darkorange;">
            eventuiu@uiu.ac.bd
        </div>
      </header>

      <div class="container">
        <br>
        <br>
        <div class="signup"><h1>Add Notice</h1></div>
        <form name="registration" class="registartion-form" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
          <table>
            
            <tr>
              <td><label for="date">Date:</label></td>
              <td><input type="date" name="date" id="date" placeholder="Date" required></td>
            </tr>
            <tr>
              <td><label for="notice_heading">Notice Heading:</label></td>
              <td><input type="text" name="notice_heading" id="notice_heading" placeholder="Notice Heading" required></td>
            </tr>
            <tr>
              <td><label for="notice_details">Notice Details:</label></td>
              <td><textarea name="notice_details" id="notice_details" placeholder="Notice Details" rows="4" required></textarea></td>
            </tr>
            <tr>
              <td colspan="2"><input type="submit" class="submit" value="Add" /></td>
            </tr>
          </table>
        </form>

<br><br><br>
<br>
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