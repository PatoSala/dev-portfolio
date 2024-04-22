import './Main.css'

// #region Pages
import Hero from '../../pages/Hero/Hero'
import About from '../../pages/About/About'
import Work from '../../pages/Work/Work'

export default function Main() {
    return (
        <div>
            <Hero/>
            <About/>
            <Work/>
        </div>
    )
}