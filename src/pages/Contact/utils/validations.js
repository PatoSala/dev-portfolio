const validations = ({ name, value }) => {
    if (value.length === 0) {
        return `Field is required`
    } else if (
        name === 'email' &&
        !value.includes('@')
    ) {
        return 'Invalid email'
    }

    return null
}

export default validations