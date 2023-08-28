import React from 'react';
import "./Input.css";

export const Input = ({ type,placeholder,className,forName,nameInput,id,label,width,height,options,onChange,value }) => {

  const inputStyle = {
    width: width,
    height: height
  };

  return (
    <div className='input-container'>
        <label htmlFor={forName}>{label}</label>
        {type != "select" && type != "textarea" && <input value={value} onChange={onChange} style={inputStyle} pattern={type == "tel" ? "[0-9]{3}-[0-9]{2}-[0-9]{3}" : null} id={id} name={nameInput} placeholder={placeholder} className={`input-reusable ${className}`} type={type}></input>}
        {type == "select" && <select value={value} onChange={onChange} style={inputStyle} id={id} name={nameInput} placeholder={placeholder} className={`select-reusable ${className}`}>
            {options && options.map((opt) =>{
              return <option key={opt} value={opt}>{opt}</option>
            })}
          </select>}
        {type == "textarea" && <textarea value={value} onChange={onChange} style={inputStyle} id={id} name={nameInput} placeholder={placeholder} className={`textarea-reusable ${className}`}></textarea>}
    </div>
  )
}

export default Input;