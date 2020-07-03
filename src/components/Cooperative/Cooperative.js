import React from 'react';
import CooperativeItem from './CooperativeItem';
import { FeatureContainer, FeatureLink } from './cooperativeStyle';
import pencil from '../../assets/pencil.svg';
import transaction from '../../assets/transaction.svg';
import notification from '../../assets/notification.svg';
import categorize from '../../assets/categorize.svg';

const iconList = [{
  id: 1,
  icon: pencil,
  title: 'Create',
  alt: 'Ever pencil',
  content: 'Creating a new cooperative made easy.'
}, {
  id: 2,
  icon: transaction,
  title: 'Transaction',
  alt: 'Transaction records',
  content: 'See all transactions within various cooperative'
}, {
  id: 3,
  icon: notification,
  title: 'Notification',
  alt: 'Stay notified',
  content: 'Never miss out on any activity in your cooperative'
}, {
  id: 4,
  icon: categorize, title: 'Active Cooperative',
  alt: 'Every category',
  content: 'Connect with cooperative with the best engagement'
}
]

const Cooperative = () => {
  return (
    <FeatureLink href='/'>   <FeatureContainer>
      {iconList.map(listed => <CooperativeItem key={listed.id} title={listed.title} icon={listed.icon} content={listed.content} />)}

    </FeatureContainer></FeatureLink>
  )
}

export default Cooperative;

