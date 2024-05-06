const validations = ({ name, value }) => {
    console.log('RUNNING VALIDATIONS');
    if (value.length === 0) {
        return `Field is required`
    } else if (
        name === 'email' &&
        !value.includes('@')
    ) {
        return 'Invalid email'
    }
}

export default validations