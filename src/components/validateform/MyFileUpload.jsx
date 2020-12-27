import React from 'react'
import { useField } from 'formik'

export const MyFileUpload = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'file' })

  return (
    <>
      {/* <div className='attachment-file'>
        <div className='upload-file'>
          <img src={require('asset/icon/attach.svg')} alt='attach' />
        </div>
        <input id='image' name='image' type='file' onChange={props.onChange} />
        <div className='showfile'>
          <span className='filedata'>{(field.name === props.name && field?.value?.name)}</span>
        </div>
      </div>
      {meta.touched && meta.error ? (
        <div className='error' style={{ color: 'red' }}>{meta.error}</div>
      ) : null} */}
    </>
  )
}