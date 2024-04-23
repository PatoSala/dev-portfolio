import './Hero.css'

// #region Components
import Section from '../../components/Section/Section'
import Title from '../../components/Title/Title'
import SquareButton from '../../components/SquareButton/SquareButton'
import SocialButtons from '../../components/SocialButtons/SocialButtons'

export default function Hero() {
    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - 2020;

    return (
        <>
            <Section>
                <Title>
                    <span className='greeting' style={{ display: 'block' }}>Pato Sala.</span>
                    <span style={{ display: 'block' }}>Full stack mobile &</span>
                    <span style={{ display: 'block' }}>web developer.</span>
                </Title>
                <div className='hero-description'>
                    <p className='hero-desc' style={{ fontWeight: '500' }}>
                        {yearsOfExperience}+ years of experience developing software.
                    </p>
                </div>
                <div className='hero-buttons'>
                    <SquareButton text='Contact me' />
                    <SocialButtons/>
                </div>
            </Section>
        </>
    )
}