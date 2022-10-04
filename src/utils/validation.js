const regexpEmail = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}')

const regexpPassword = new RegExp('[a-z]')

export const isValidEmail = email => regexpEmail.test(email)

export const isValidPassword = password => regexpPassword.test(password)

export const isSamePassword = (password, repassword) => password === repassword
