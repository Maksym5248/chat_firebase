function creatorLastMessage(message) {
  return {
    text: message.text,
    time: message.time,
    status: message.status,
    author: message.author,
  };
}


export default creatorLastMessage;
