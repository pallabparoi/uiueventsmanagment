import Footer from "@/components/footer/page"
import Header from "@/components/header/page"
import "./style.css"

export default function signup(){
    return(
        <div>
            <Header/>

            <div class="container">
        <div class="signup"><h1>Sign Up</h1></div>
        <form name="registration" class="registartion-form" onsubmit="return formValidation()">
          <table>
            <tr>
              <td><label for="name">Name:</label></td>
              <td><input type="text" name="name" id="name" placeholder="your name"/></td>
            </tr>
            <tr>
              <td><label for="email">Email:</label></td>
              <td><input type="text" name="email" id="email" placeholder="your email"/></td>
            </tr>
            <tr>
              <td><label for="password">Password:</label></td>
              <td><input type="password" name="password" id="password"/></td>
            </tr>
            <tr>
              <td><label for="phoneNumber">Phone Number:</label></td>
              <td><input type="number" name="phoneNumber" id="phoneNumber"/></td>
            </tr>
            <tr>
              <td><label for="gender">Gender:</label></td>
              <td>Male   <input type="radio" name="gender" value="male"/>
                  Female <input type="radio" name="gender" value="female"/>
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


<Footer />
        </div>
    )
}