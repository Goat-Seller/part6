import { connect } from "react-redux"
import { setNotification } from "../reducers/notificationReducer"
import { createAnecdote } from "../reducers/anecdoteReducer"

const AnecdoteForm = (props) => {
    const addAnecdote = async (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        e.target.anecdote.value = ''
        props.createAnecdote(content)
        props.setNotification(`You've created ${content}`, 5)
    }
    return(
        <>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
            <div><input name='anecdote' /></div>
            <button type="submit" >create</button>
        </form>
      </>
    )
}

const ConectedForm = connect(null, { createAnecdote, setNotification })(AnecdoteForm)
export default ConectedForm