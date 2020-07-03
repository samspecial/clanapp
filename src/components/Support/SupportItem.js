import React from 'react';
import { Div, FeatureLink } from '../Cooperative/cooperativeStyle';
import { Link } from 'react-router-dom'

const SupportItem = (props) => {
  return (
    <Div>
      <img src={props.icon} alt={props.alt} />
      <h1><Link to='/support/${props.key}`'>{props.title}</Link></h1>
      <p>{props.content}</p>
    </Div>
  )
}

export default SupportItem;

