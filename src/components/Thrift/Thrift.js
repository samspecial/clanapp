import React from 'react';
import ThriftItem from './ThriftItem';
import { FeatureContainer, FeatureLink } from '../Cooperative/cooperativeStyle';
import apply from '../../assets/apply.svg';
import active from '../../assets/active.svg';
import help from '../../assets/help.svg';
import transaction from '../../assets/transaction.svg';

const thriftList = [{
  id: 1,
  icon: apply,
  title: 'Apply',
  alt: 'Thrift application',
  content: 'Getting a thrift got easy simple with us'
}, {
  id: 2,
  icon: active,
  title: 'Contact Us',
  alt: 'contact us',
  content: 'We would love to hear from you.'
}, {
  id: 3,
  icon: help,
  title: 'FAQ',
  alt: 'freqently asked questions',
  content: 'Are you stuck? Reach out to stay free. We have curated answers to issues.'
}, {
  id: 4,
  icon: transaction,
  title: 'Transaction',
  alt: 'Thrift transaction',
  content: 'We process all transactions under 24 Hours'
}
]

const Thrift = () => {
  return (
    <FeatureLink href="https://learndash.com">   <FeatureContainer>
      {thriftList.map(thrift => <ThriftItem key={thrift.id} title={thrift.title} icon={thrift.icon} content={thrift.content} />)}

    </FeatureContainer></FeatureLink>
  )
}

export default Thrift;

