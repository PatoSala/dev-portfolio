import './Hero.css'

// #region Components
import Section from '../../components/Section/Section'
import Title from '../../components/Title/Title'
import SquareButton from '../../components/SquareButton/SquareButton'

export default function Hero() {
    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - 2020;

    return (
        <>
            <Section>
                <Title>
                    <span className='greeting' style={{ display: 'block' }}>Hello, I'm Pato.</span>
                    <span style={{ display: 'block' }}>Full stack mobile &</span>
                    <span style={{ display: 'block' }}>web developer.</span>
                </Title>
                <div className='hero-description'>
                    <p style={{ fontSize: '2rem', fontWeight: '500', maxWidth: '70%' }}>
                        {yearsOfExperience}+ years of experience developing software.
                    </p>
                </div>
                <div className='hero-buttons'>
                    <SquareButton text='Contact me' />
                </div>
            </Section>
        </>
    )
}