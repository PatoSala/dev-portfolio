import './Project.css'

export default function Project({ projectData }) {

    const handleOnClick = () => {
        window.open(projectData.link, '_blank');
    }

    return (
        <div className="project" onClick={handleOnClick}>
            <div className='box-shadow-container' style={{ background: projectData.bgColor, padding: '2.5rem' }}>
                <h3>{projectData.name}</h3>
                <p>{projectData.desc}</p>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start'
                }}>
                    {projectData.techStack.map(tech => (
                        <span className='tech-name' style={{ background: projectData.bgColor }}>{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}