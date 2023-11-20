import Footer from "@/components/footer/page"
import Header from "@/components/header/page"
import "./style.css"
export default function login(){
    return(
        <div>
          <Header />
<div class="container">
        <div class="signup"><h1>Log In</h1></div>
        <form name="registration" class="registartion-form" onsubmit="return formValidation()">
          <table>
            
            <tr>
              <td><label for="email">Email:</label></td>
              <td><input type="text" name="email" id="email" placeholder="your email"/></td>
            </tr>
            <tr>
              <td><label for="password">Password:</label></td>
              <td><input type="password" name="password" id="password"/></td>
            </tr>
            <tr>
              <td colspan="2"><input type="submit" class="submit" value="Log In" /></td>
            </tr>
          </table>
        </form>
        <a href="">Forgot Password</a>
      </div>

<Footer/>
        </div>
    )
}