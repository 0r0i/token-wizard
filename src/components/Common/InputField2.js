import React from 'react'
import { Error } from './Error'
import { FormControlTitle } from '../Common/FormControlTitle'
import { TextField } from '../Common/TextField'

export const InputField2 = props => {
  if (props.val) {
    props.input.value = props.val
  }

  return (
    <div className={`sw-InputField ${props.extraClassName ? props.extraClassName : ''}`}>
      <FormControlTitle title={props.label} description={props.description} />
      <TextField
        autoComplete="off"
        className={props.inputClassName ? props.inputClassName : 'input'}
        disabled={props.disabled}
        id={props.input.name}
        placeholder={props.placeholder}
        type={props.type}
        {...props.input}
      />
      <Error name={props.input.name} />
    </div>
  )
}
