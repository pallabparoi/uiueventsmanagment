<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="regi.css">
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
          <a href="Sign.php">LogIn</a>
          <input type="text" placeholder="Search..">
        </nav>
      </header>
      <header class="header0">
        <div style="color: darkorange;">
            eventuiu@uiu.ac.bd
        </div>
      </header>

      <div class="container">
        <div class="signup"><h1>Sign Up</h1></div>
        <form name="registration" class="registartion-form" onsubmit="return formValidation()">
          <table>
            <tr>
              <td><label for="name">Name:</label></td>
              <td><input type="text" name="name" id="name" placeholder="your name"></td>
            </tr>
            <tr>
              <td><label for="email">Email:</label></td>
              <td><input type="text" name="email" id="email" placeholder="your email"></td>
            </tr>
            <tr>
              <td><label for="password">Password:</label></td>
              <td><input type="password" name="password" id="password"></td>
            </tr>
            <tr>
              <td><label for="phoneNumber">Phone Number:</label></td>
              <td><input type="number" name="phoneNumber" id="phoneNumber"></td>
            </tr>
            <tr>
              <td><label for="gender">Role:</label></td>
              <td>Male   <input type="radio" name="gender" value="Stuff">
                  Female <input type="radio" name="gender" value="Student">
                  </td>
            </tr>
            <tr>
              <td><label for="language">language</label></td>
              <td>
                <select name="language" id="language">
                  <option value="">Select language</option>
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Arabic">Arabic</option>
                  <option value="Russian">Russian</option>
                </select>
              </td>
            </tr>
            <tr>
              <td colspan="2"><input type="submit" class="submit" value="Register" /></td>
            </tr>
          </table>
        </form>
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