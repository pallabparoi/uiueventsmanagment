<?php
// Start or resume the session
session_start();

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

// Check if the user is logged in
$isLoggedIn = isset($_SESSION['email']);

// Fetch the user's name if logged in
$userName = "name";
if ($isLoggedIn) {
    // Assuming you have a "users" table with a column "name"
    $email = $_SESSION['email'];
    $sql = "SELECT name FROM user WHERE email = $email";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $userName = $row['name'];
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Home.css">
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
            <a href="Notice.php">Notice</a>
            
            <?php
            // Display user's name or LogIn button based on login status
            if ($isLoggedIn) {
                echo '<a href="Notice.php">' . $userName . '</a>';
            } else {
                echo '<a href="Sign.php">LogIn</a>';
            }
            ?>
            
            <input type="text" placeholder="Search..">
        </nav>
    </header>
      <header class="header0">
        <div style="color: darkorange;">
            eventuiu@uiu.ac.bd
        </div>
      </header>

      <main>
        <div class="intro">
          
          <h1>UIU Event Management System</h1>
          <a href="https://www.uiu.ac.bd/events/"><button>Learn More</button></a>
        </div>
        <div class="achievements">
          <div class="work">
            <i class="fas fa-atom"></i>
            <a href="Notice.php"><p class="work-heading">Past Events+</p></a>
            <?php
              $sql = "SELECT * FROM notice ORDER BY date DESC LIMIT 1";
              $result = $conn->query($sql);

              

if ($result->num_rows > 0) {
    // Fetch the data
    $row = $result->fetch_assoc();
    $latestNotice = $row['notice'];
    $date = $row['date'];
    // Add other columns as needed
} else {
    $latestNotice = "No notice available";
    $date = "";
}
?>

<div class="work">
    <p class="work-text"><?php echo $date; ?></p>
    <p class="work-text"><?php echo $latestNotice; ?></p>
</div>
          </div>
          <div class="work">
            <i class="fas fa-skiing"></i>
            <a href="Notice.php"><p class="work-heading">Upcoming Events+</p></a>
            <?php
              $sql = "SELECT * FROM notice ORDER BY date DESC LIMIT 1";
              $result = $conn->query($sql);

              

if ($result->num_rows > 0) {
    // Fetch the data
    $row = $result->fetch_assoc();
    $latestNotice = $row['notice'];
    $date = $row['date'];
    // Add other columns as needed
} else {
    $latestNotice = "No notice available";
    $date = "";
}
?>

<div class="work">
    <p class="work-text"><?php echo $date; ?></p>
    <p class="work-text"><?php echo $latestNotice; ?></p>
</div>
          </div>
          <div class="work">
            <i class="fas fa-ethernet"></i>
            <a href="Notice.php"><p class="work-heading">Notice+</p></a>
            <?php
              $sql = "SELECT * FROM notice ORDER BY date DESC LIMIT 1";
              $result = $conn->query($sql);

              

if ($result->num_rows > 0) {
    // Fetch the data
    $row = $result->fetch_assoc();
    $latestNotice = $row['notice'];
    $date = $row['date'];
    // Add other columns as needed
} else {
    $latestNotice = "No notice available";
    $date = "";
}
?>

<div class="work">
    <p class="work-text"><?php echo $date; ?></p>
    <p class="work-text"><?php echo $latestNotice; ?></p>
</div>

          </div>
        </div>
        <div class="about-me">
          <div class="about-me-text">
            <h2 hre>About Us</h2>
            <a href="https://www.uiu.ac.bd/">This is a placeholder text. You can use it to fill space on your webpage until the actual content
               is ready.</a>
          </div>
          <img src="uiu.png" alt="">
        </div>
      </main>

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
