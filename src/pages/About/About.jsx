import './About.css'

import Section from "../../components/Section/Section"
import Subtitle from "../../components/Subtitle/Subtitle"

export default function About() {
    return (
        <Section bgColor={'#f5f5f0'}>
            <div className='about-content'>
                <Subtitle children="About me." style={{ textAlign: 'center' }}/>
                <p className='about-desc'>
                    I'm Pato, a 22 years old full stack mobile and web developer based in Argentina. I started my journey as a software developer back in 2020. In the past years I've been pushing my self to become a better developer by working in various projects, learning new technologies and building applications and websites desgined to be maintainable and scalable.
                </p>
            </div>
        </Section>
    )
}