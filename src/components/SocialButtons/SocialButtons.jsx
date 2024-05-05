import './SocialButtons.css'

// #region Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function SocialButtons() {

    return (
        <ul className="social-buttons-container">
            <li className='social-icon' id='github' onClick={() => window.open('https://github.com/PatoSala')}>
                <GitHubIcon fontSize='large'/>
            </li>
            <li className='social-icon' id='instagram' onClick={() => window.open('https://www.instagram.com/pato.sala')}>
                <InstagramIcon fontSize='large'/>
            </li>
            <li className='social-icon' id='linkedin' onClick={() => window.open('https://www.linkedin.com/in/patricio-sala-1025a1190/')}>
                <LinkedInIcon fontSize='large'/>
            </li>
        </ul>
    )
}