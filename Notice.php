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
$isLoggedIn = isset($_SESSION['user_id']);

// If the "Add Notice+" button is clicked and the user is not logged in, redirect to the login page
if (isset($_POST['name']) && !$isLoggedIn) {
    header("Location: Notice.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="notice.css">
    <link rel="stylesheet" href="notice2.css">
    <title>Your Website</title>
</head>
<body>
    <!--header section-->
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
            <!--edit from here-->
            <!--edit till here-->
            <input type="text" placeholder="Search..">
        </nav>
    </header>
    <header class="header0">
        <div style="color: darkorange;">
            eventuiu@uiu.ac.bd
        </div>
    </header>

    <?php
    $sql = "SELECT * FROM notice";
    $result = $conn->query($sql);

    // Check if there are rows in the result
    if ($result->num_rows > 0) {
        // Output the data in a table
        echo '<div class="table-container">';
        echo '<table>';
        echo '<tr><th>Date</th><th>Notice</th><th>Notice Details</th></tr>';

        while ($row = $result->fetch_assoc()) {
            echo '<tr>';
            echo '<td>' . $row['date'] . '</td>';
            echo '<td>' . $row['notice'] . '</td>';
            echo '<td>' . $row['notice details'] . '</td>';
            echo '</tr>';
        }

        echo '</table>';
        echo '</div>';
    } else {
        echo '<div class="no-notices">No notices available.</div>';
    }

    // Close the database connection
    $conn->close();
    ?>

    <!--footer section-->
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
