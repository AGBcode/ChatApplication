import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message';

import './Messages.css';

const Messages = ({ messages, name }) => (
  <ScrollToBottom>
      {messages.map((message, i) => <div hey={i}><Message message={message} name={name}/></div>)}
  </ScrollToBottom>
)

export default Messages;