import "./style.css"
export default function header(){
    return(
    
    <div>


<header class="header0">
        <div className="flex ">
            <img className=" mr-3" src="/maillogo.png" width={20}/>
            <p>eventuiu@uiu.ac.bd</p>
        </div>
      </header>
    <header class="header">
        <img src="/logo.png" width={280}/>
        <nav class="nav-items">
          <a href="/">Home</a>
          <a href="/upcoming">Upcoming</a>
          <a href="/archive">Events</a>
          <a href="/signup">SignUp</a>
          <a href="/login">LogIn</a>
          <a href="/profile">My Profile</a>
          <input type="text" placeholder="Search.."/>
        </nav>
      </header>


    </div>
        
    )
}