import { connect } from 'react-redux'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if(props.notification !== ''){
    return(
      <div style={style}>
        {props.notification}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return { notification: state.notification }
}
const ConectedNotification = connect(mapStateToProps)(Notification)

export default ConectedNotification