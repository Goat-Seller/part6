import { connect } from "react-redux"
import { setFilter } from '../reducers/filterReducer'
const Filter = (props) => {
    const handleChange = (e) => {
        e.preventDefault()
        const text = e.target.value
        props.setFilter(text)
    }

    const style = {
        marginBottom: 10
    }

    return (
        <label style={style}>Filter: <input type='text'  onChange={handleChange}/></label>
    )
}

const ConectedFilter = connect(null, { setFilter })(Filter)
export default ConectedFilter