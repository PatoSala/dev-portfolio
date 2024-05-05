import './Main.css'

// #region Pages
import Hero from '../../pages/Hero/Hero'
import About from '../../pages/About/About'
import Work from '../../pages/Work/Work'
import Contact from '../../pages/Contact/Contact'
import Footer from '../../pages/Footer/Footer'

export default function Main() {
    return (
        <div>
            <Hero/>
            <About/>
            <Work/>
            <Contact/>
            <Footer/>
        </div>
    )
}