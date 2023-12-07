import Footer from "@/components/footer/page"
import Header from "@/components/header/page"
import "./style.css"
export default function login(){
    return(
        <div>
        <Header />

        <div class="profile-container">
    <div class="box">
        <img src="/7515495b-982d-44d2-9931-5a8bbbf27532.jpeg" ></img>
        <ul>
                <li>Name: Rahim Khan</li>
                <li>Age: 24 years</li>
                <li>Role: Student</li>
                <li>ID:011203432</li>
            </ul>

    </div>
    <div class="History">
    <ul>
                <h1>about</h1>
            </ul>
            <ul>
                <h3>Date of birth</h3>
                <li>12 October 2001</li>
            </ul>
            <ul>
                <h3>Gender</h3>
                <li>male</li>
            </ul>
            <ul>
                <h3>Department</h3>
                <li>CSE</li>
            </ul>
            <ul>
                <h3>Attented Events</h3>
                <ul>
                    <li>1.UIU Cultural Program</li>
                    <li>2.UIU Sports Tournament</li>
                </ul>
            </ul>
            <ul>
                <h3>Contact</h3>
                <li>rkbscse203432@bscse.uiu.ac.bd</li>
            </ul>
    </div>

</div>





        <Footer/>
        </div>
    )
    <?php
$servername = "your_mysql_server";
$username = "your_mysql_username";
$password = "your_mysql_password";
$dbname = "your_mysql_database";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['userId']) && isset($_FILES['profilePicture'])) {
    $userId = $_POST['userId'];
    $profilePicture = $_FILES['profilePicture'];

    
    $uploadDir = 'uploads/';

   
    if (!file_exists($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    
    $uploadFile = $uploadDir . uniqid() . '_' . basename($profilePicture['name']);

    
    if (move_uploaded_file($profilePicture['tmp_name'], $uploadFile)) {
        
        $sql = "UPDATE users SET profile_picture = '$uploadFile' WHERE user_id = '$userId'";
        $result = $conn->query($sql);

        if ($result === TRUE) {
            echo json_encode(['success' => true, 'message' => 'Profile picture updated successfully']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Error updating profile picture']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'Error uploading file']);
    }
}


if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['userId']) && isset($_POST['attendedEvents'])) {
    $userId = $_POST['userId'];
    $attendedEvents = json_encode($_POST['attendedEvents']);

    $sql = "UPDATE users SET attended_events = '$attendedEvents' WHERE user_id = '$userId'";
    $result = $conn->query($sql);

    if ($result === TRUE) {
        echo json_encode(['success' => true, 'message' => 'Attended events updated successfully']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error updating attended events']);
    }
}

$conn->close();
?>
}        