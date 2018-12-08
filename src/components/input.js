import React from 'react';

const Input = (title, state, onChange, name) => {
    return (
        <div className="input">
            <input name={title} value={state} onChange={onChange} name={name}/>
            <lable>{ title }</lable>
        </div>
    )
}

export default Input;