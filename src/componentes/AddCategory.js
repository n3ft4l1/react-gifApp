
import PropTypes from 'prop-types'
import React, { useState } from 'react'

export const AddCategory = ({setcat}) => {

    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        if (inputValue.trim().length > 2) {
            setcat( (e) => [inputValue,...e])
            setInputValue('')


        }

        

    }

  return (
    <form onSubmit={handleSubmit}>
     
        <input
            type='text'
            value={inputValue}
            onChange={ handleInputChange }
        ></input>
    </form>
  )
}

AddCategory.propTypes = {
    setcat : PropTypes.func.isRequired
}
