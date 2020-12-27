import React from 'react'
import { useField } from 'formik'

export const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      {/* <textarea className='input-fi form-control' style={{ width: '100%', paddingBottom: 17 }} {...field} {...props}></textarea>
      <label className={`input-label ${field.name === props.name && field.value ? 'isVal' : undefined}`} htmlFor={props.id || props.name}>{label}</label>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null} */}
    </>
  )
}