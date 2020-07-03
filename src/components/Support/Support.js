import React from 'react';
import SupportItem from './SupportItem';
import { FeatureContainer, FeatureLink } from '../Cooperative/cooperativeStyle';
// import pencil from '../../assets/pencil.svg';
import contact from '../../assets/contact.svg';
import help from '../../assets/help.svg';
import mail from '../../assets/mail.svg';

const supportList = [{
  id: 1,
  icon: mail,
  title: 'Mail',
  alt: 'mail box',
  content: 'Our mailing lines are up for communications. Do us a mail and expect an instant reply.'
}, {
  id: 2,
  icon: contact,
  title: 'Contact Us',
  alt: 'contact us',
  content: 'We would love to hear from you.'
}, {
  id: 3,
  icon: help,
  title: 'FAQ',
  alt: 'freqently asked questions',
  content: 'Are you stuck? Reach out to stay free. We have curated answers to issues.'
}
]

const Support = () => {
  return (
    <FeatureContainer>
      {supportList.map(support => <SupportItem key={support.id} title={support.title} icon={support.icon} content={support.content} />)}

    </FeatureContainer>
  )
}

export default Support;

