import './Contact.css'

// #region Components
import Section from '../../components/Section/Section'
import Subtitle from '../../components/Subtitle/Subtitle'
import Input from '../../components/Input/Input'
import SquareButton from '../../components/SquareButton/SquareButton'

export default function Contact() {
    return (
        <Section>
            <Subtitle>
                Let's <span style={{ color: '#1065ed' }}>Talk</span>
            </Subtitle>
            <div>
                <Input
                    label='Name'
                    type='text'
                    placeholder='What should I call you?'
                />

                <Input
                    label='Email'
                    type='text'
                    placeholder='Where can I reach you?'
                />

                <Input
                    label='Message'
                    type='textarea'
                    placeholder='Message'
                />
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <SquareButton text={'Send Message'}/>
            </div>
        </Section>
    )    
}