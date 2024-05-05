import './Input.css'

export default function Input({ label, type, placeholder }) {
    return (
        <div className='input-container'>
            <h3 className='label'>{label}</h3>
            {type === 'textarea' ?
            <textarea className='input' placeholder={placeholder}></textarea>
            : <input className='input' type={type} placeholder={placeholder}/>}
        </div>
    )
}