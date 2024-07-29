const Notification = ({message}) => {
  if (message === null) {
    return null
  }

  const confirmStyle = {
    color: 'green',
    backgroundColor: 'lightGreen',
    borderColor: 'green',
    borderRadius: 5,
    padding: 10
  }

  return (
    <div style={confirmStyle}>
      {message}
    </div>
  )
}

export default Notification