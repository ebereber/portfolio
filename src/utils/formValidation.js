export const validation = ({ name, email, subject, message }) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (!name) {
    return 'Name is required'
  }

  if (!email) {
    return 'Email is required'
  } else if (regex.test(email.toLocalLowerCase)) {
    return 'Invalid email addres'
  }

  if (!subject) {
    return 'Subject is required, please select an option'
  }

  if (!message) {
    return 'Message is required'
  }

  return null
}
