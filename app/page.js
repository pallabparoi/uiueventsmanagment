import Footer from "@/components/footer/page"
import Header from "@/components/header/page"
import "./style.css"
export default function Home() {
  return (
    <main>
      <Header />

<div class="intro">
          <h1>A Event Management System</h1>
          <button>Learn More</button>
        </div>
        <div class="achievements">
          <div class="work">
            <i class="fas fa-atom"></i>
            <p class="work-heading">Past Events</p>
            <p class="work-text">This is a placeholder text. You can use it to fill space on your webpage until the actual content is ready.</p>
          </div>
          <div class="work">
            <i class="fas fa-skiing"></i>
            <p class="work-heading">Upcoming Events</p>
            <p class="work-text">This is a placeholder text. You can use it to fill space on your webpage until the actual content is ready.</p>
          </div>
          <div class="work">
            <i class="fas fa-ethernet"></i>
            <p class="work-heading">Network</p>
            <p class="work-text">This is a placeholder text. You can use it to fill space on your webpage until the actual content is ready.</p>
          </div>
        </div>
        <div class="about-me">
          <div class="about-me-text">
            <h2>About Us</h2>
            <p>This is a placeholder text. You can use it to fill space on your webpage until the actual content is ready.</p>
          </div>
          <img src="C:\xampp\htdocs\Event-Management-System-st\uiu.jpg" alt="me"/>
        </div>
      <Footer />
    </main>
  )
}
