import styles from './styles.module.css'

import Section from "../../components/Section/Section"
import Subtitle from "../../components/Subtitle/Subtitle"
import TechStack from './components/TechStack/TechStack'

export default function About() {

    return (
        <Section bgColor={'#f8f9fa'}>
            <div className={styles['about-content']}>
                <Subtitle>
                    About <span style={{ color: '#1065ed'}}>Me</span>
                </Subtitle>
                <p className={styles['about-desc']}>
                    I'm Pato, a 22 years old full stack mobile and web developer based in Argentina. I started my journey as a software developer back in 2020.
                    <br/>
                    In the past years I've been pushing my self to become a better developer by working in various projects, learning new technologies and building applications and websites desgined to be maintainable and scalable.
                </p>

                <TechStack/>
            </div>
        </Section>
    )
}