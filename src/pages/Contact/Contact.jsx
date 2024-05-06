import './Contact.css'
import { useState } from 'react'

// #region Utils
import validations from './utils/validations'

// #region Components
import Section from '../../components/Section/Section'
import Subtitle from '../../components/Subtitle/Subtitle'
import Input from '../../components/Input/Input'
import SquareButton from '../../components/SquareButton/SquareButton'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleOnChange = (e) => {
        const validationResults = validations({
            name: e.target.name,
            value: e.target.value
        })

        if (validationResults) {
            setErrors({
                ...errors,
                [e.target.name]: validationResults
            })
        } else {
            if (errors[e.target.name]) {
                setErrors({
                    ...errors,
                    [e.target.name]: ''
                })
            }
        }

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        errors.keys().forEach((key) => {
            if (errors[key]) {
                e.target[key].classList.add('error')
            }
        })
    }
    return (
        <Section>
            <Subtitle>
                Let's <span style={{ color: '#1065ed' }}>Talk</span>
            </Subtitle>
            <div>
                <Input
                    label='Name'
                    type='text'
                    name='name'
                    placeholder='What should I call you?'
                    value={formData.name}
                    onChange={(e) => handleOnChange(e)}
                    errors={errors.name}
                />

                <Input
                    label='Email'
                    type='text'
                    name='email'
                    placeholder='Where can I reach you?'
                    value={formData.email}
                    onChange={(e) => handleOnChange(e)}
                    errors={errors.email}
                />

                <Input
                    label='Message'
                    type='textarea'
                    name='message'
                    placeholder='Message'
                    value={formData.message}
                    onChange={(e) => handleOnChange(e)}
                    errors={errors.message}
                />
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <SquareButton text={'Send Message'} onClick={(e) => handleSubmit(e)}/>
            </div>
        </Section>
    )    
}