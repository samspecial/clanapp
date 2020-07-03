import React from 'react';
import { Div } from '../Cooperative/cooperativeStyle'

const ThriftItem = (props) => {
  return (
    <Div>
      <img src={props.icon} alt={props.alt} />
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </Div>
  )
}

export default ThriftItem;

