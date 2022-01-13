import React from 'react'
import { Form } from 'react-bootstrap'

import './Filter.css'


const FilterByTitle = ({ inputText, setInputText }) => {


    const handleChange = (e) => {
        setInputText(e.target.value)
    }

    return (
        <div>
            <Form.Control type="text"
                value={inputText}
                onChange={handleChange}
                className="inputFilter"
                placeholder="Enter movie title ..." />
        </div>
    )
}

export default FilterByTitle