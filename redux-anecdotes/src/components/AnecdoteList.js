import { useDispatch, useSelector } from "react-redux"
import { updateAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from "../reducers/notificationReducer"

const AnecdoteList = () => {
    const anecdotes =  useSelector(({filter, anecdotes}) => anecdotes.slice()
    .filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
    .sort((a,b) => b.votes - a.votes)
    )

    const dispatch = useDispatch()

    const vote = (anecdote) => {
        dispatch(updateAnecdote(anecdote))
        dispatch(setNotification(`You voted on ${anecdote.content}`, 5))
    }

    return (
        <>
        {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote)}>vote</button>
            </div>
            </div>
        )}
      </>
    )
}
export default AnecdoteList