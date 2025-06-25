
import './App.css'
import FAQSection from './components/FAQsection/Faq'
import Footer from './components/footer/Footer'
import Gurantee from './components/guarantee/Gurantee'
import Navbar from './components/navbar/navbar'
import Reviews from './components/reviews/Reviews'
import Signup from './components/signup/Signup'
import Videopage from './components/videopage/Videopage'

function App() {
    return (
      <div>
        <Navbar/>
        <Videopage/>
        <Signup/>
        <Gurantee/>
        <FAQSection/>
        <Reviews/>
        <Footer/>
      </div>
   
  )
}

export default App
