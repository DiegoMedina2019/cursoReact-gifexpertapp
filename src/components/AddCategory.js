import React, {useState} from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')
    const handledInputChange = (e) =>{
        setInputValue(e.target.value)
    }
    const handledSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            //etCategories puede usar un callback, donde obtenemos el estado anterio cats(array de categorias) 
            setCategories(cats=>[inputValue,...cats])
            setInputValue('')
        }
    }
    return (
        <form onSubmit={handledSubmit}>
        
            <input
                type="text"
                value={inputValue}
                onChange={handledInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}