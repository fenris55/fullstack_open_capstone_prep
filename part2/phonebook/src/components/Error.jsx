const ErrorMessage = ({message}) => {
  if (message === null) {
    return null
  }

  const errorStyle = {
    color: 'red',
    backgroundColor: 'lightGrey',
    borderColor: 'red',
    borderRadius: 10,
    padding: 10
  }

  return (
    <div style={errorStyle}>
      {message}
    </div>
  )
}

export default ErrorMessage