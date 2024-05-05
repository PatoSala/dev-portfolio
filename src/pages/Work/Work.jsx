import './Work.css'
import Section from "../../components/Section/Section"
import Subtitle from "../../components/Subtitle/Subtitle"
import Project from '../../components/Project/Project'

export default function Work() {
    const projects = [
        {
            name: 'Caú',
            desc: 'A mobile and desktop app to manage a stud.',
            link: '',
            techStack: ['Expo', 'React Native', 'Supabase', 'Figma'],
            thumbnail: '',
            bgColor: '#FF8E5E99'
        },
        {
            name: 'Old Twitter',
            desc: 'A working version of Twitter with its old design.',
            link: 'https://github.com/PatoSala/old-twitter',
            techStack: ['Html', 'Css', 'Javascript', 'Supabase'],
            thumbnail: '',
            bgColor: '#63C4D199'
        },
        {
            name: 'WhatsApp Web Clone',
            desc: 'A self made working version of whatsapp web allowing multiple sessions within the same local network.',
            link: 'https://github.com/PatoSala/WhatsApp-Web-Clone',
            techStack: ['React', 'Node', 'Express'],
            thumbnail: '',
            bgColor: '#1FC9A499'
        },
        {
            name: 'Game Store',
            desc: 'My very first project, a full working e-commerce website.',
            link: 'https://github.com/PatoSala/GameStore-Ecommerce',
            techStack: ['Node', 'Express', 'MySQL', 'Sequelize', 'Ejs'],
            thumbnail: '',
            bgColor: '#95B0B499'
        },
        {
            name: 'YouTube Music Player',
            desc: 'An app to play music from YouTube music API.',
            link: 'https://github.com/PatoSala/music-player-reloaded',
            techStack: ['Expo'],
            thumbnail: '',
            bgColor: '#c7c50499'
        }
    ]
    return (
        <Section>
            <Subtitle>
                Selected <span style={{ color: '#1065ed'}}>Works</span>
            </Subtitle>
            <div className='projects-container'>
                {projects.map(project => (
                    <Project key={project.name} projectData={project} />
                ))}
            </div>
        </Section>
    )
}