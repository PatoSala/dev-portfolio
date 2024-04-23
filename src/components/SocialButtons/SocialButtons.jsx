import './SocialButtons.css'

// #region Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function SocialButtons() {

    return (
        <ul className="social-buttons-container">
            <li className='social-icon' id='github'>
                <GitHubIcon fontSize='large'/>
            </li>
            <li className='social-icon' id='instagram'>
                <InstagramIcon fontSize='large'/>
            </li>
            <li className='social-icon' id='linkedin'>
                <LinkedInIcon fontSize='large'/>
            </li>
        </ul>
    )
}