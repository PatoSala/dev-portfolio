import './Input.css'

export default function Input({ label, type, placeholder, name, value, onChange, errors }) {

    return (
        <div className='input-container'>
            <h3 className='label'>{label}</h3>
            {type === 'textarea' ?
            <textarea
                className='input'
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={(e) => onChange(e)}
            />
            : <input
                className='input'
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e)}
            />}
            {errors && <p className='error'>{errors}</p>}
        </div>
    )
}