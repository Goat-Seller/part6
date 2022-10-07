import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name:'anecdotes',
  initialState: [],
  reducers: {
    appendAnecdote: (state, action) => {
      state.push(action.payload)
    },
    initVote: (state, action) => {
      const id = action.payload.id
      const anecdote = state.find(a => a.id === id)
      const changedAnecdote =  {...anecdote, votes: anecdote.votes + 1 || 1}
      return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)
    },
    setAnecdotes: (state, action) => {
      return action.payload
    }
  }
})

export const { initVote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}
export const createAnecdote = content => {
  return async dispatch => {
    const newNote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newNote))
  }
}
export const updateAnecdote = (anecdote) => {
  return async (dispatch, getState) => {
    await dispatch(initVote(anecdote)).payload
    const updated = getState().anecdotes.find(a => a.id === anecdote.id)
    await anecdoteService.update(anecdote.id, updated)
  }
}
export default anecdoteSlice.reducer