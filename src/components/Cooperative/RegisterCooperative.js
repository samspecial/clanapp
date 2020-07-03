import React, { useState } from 'react';
import { useForm } from '../useForm';
import { Form, Button } from '../loginStyle';

const RegisterCooperative = () => {

  const [values, handleChange] = useForm({
    cooperativeName: '',
    email: '',
    agrementPath: '',
    slot: '',
    userId: ''
  })
  return (
    <div>
      <Form onSubmit={(event) => handleSubmit(event)} encType='multipart/form-data'>
        <label htmlFor='cooperativeName'>
          <input id='cooperativeName'
            type='text'
            name='cooperativeName'
            value={values.cooperativeName}
            onChange={handleChange} required
            placeholder='First Name' />
        </label>
        <label htmlFor='ownerEmail'>
          <input id='ownerEmail'
            type='email'
            name='email'
            value={values.email}
            onChange={handleChange} required
            placeholder='Email Address' />
        </label>
        <label htmlFor='agrementDoc'>
          <input id='agrementDoc'
            type='file'
            name='agrementDoc'
            value={values.agrementPath}
            onChange={handleChange} required
            placeholder='Agrement Document' />
        </label>
        <label htmlFor='slot'>
          <input id='slot'
            type='number'
            name='slot'
            value={values.slot}
            onChange={handleChange} required
            placeholder='Slot' />
        </label>
        <label htmlFor='agrementDoc'>
          <input id='agrementDoc'
            type='file'
            name='agrementDoc'
            value={values.agrementPath}
            onChange={handleChange} required
            placeholder='Password' />
        </label>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}

export default RegisterCoperative;