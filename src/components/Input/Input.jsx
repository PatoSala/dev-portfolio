import styles from './styles.module.css'

export default function Input({ label, type, placeholder, name, value, onChange, errors }) {
    return (
        <div className={styles['input-container']}>
            <h3 className={styles['label']}>{label}</h3>
            {type === 'textarea' ?
            <textarea
                className={`${styles['input']} ${errors ? styles['error'] : ''}`}
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={(e) => onChange(e)}
                style={{
                    minHeight: '200px'
                }}
            />
            : <input
                className={`${styles['input']} ${errors ? styles['error'] : ''}`}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e)}
            />}
            {errors && <p className={styles['error']}>{errors}</p>}
        </div>
    )
}