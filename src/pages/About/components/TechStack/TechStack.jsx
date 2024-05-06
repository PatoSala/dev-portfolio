import styles from './styles.module.css';

import ReactLogo from '../../assets/react.png'
import NodeLogo from '../../assets/node-js.png'
import JavascriptLogo from '../../assets/js.png'
import HtmlLogo from '../../assets/html.png'
import CssLogo from '../../assets/css.png'
import MySqlLogo from '../../assets/my-sql.png'
import SupabaseLogo from '../../assets/supabase.png'
import ExpoLogo from '../../assets/expo.png'
import FigmaLogo from '../../assets/figma.png'

export default function TechStack() {

    const techStack = [
        {
            name: 'React',
            icon: ReactLogo
        },
        {
            name: 'Node',
            icon: NodeLogo
        },
        {
            name: 'JavaScript',
            icon: JavascriptLogo
        },
        {
            name: 'Html',
            icon: HtmlLogo
        },
        {
            name: 'Css',
            icon: CssLogo
        },
        {
            name: 'MySQL',
            icon: MySqlLogo
        },
        {
            name: 'Supabase',
            icon: SupabaseLogo
        },
        {
            name: 'Expo',
            icon: ExpoLogo
        },
        {
            name: 'Figma',
            icon: FigmaLogo
        }
    ]

    return (
        <div className={styles['tech-stack']}>
            <h3>Tech Stack</h3>
            <ul>
                {techStack.map(tech => (
                    <li className={styles['tech-name']} key={tech.name}>
                        <img src={tech.icon} alt={tech.name} width={44}/>
                        {tech.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}