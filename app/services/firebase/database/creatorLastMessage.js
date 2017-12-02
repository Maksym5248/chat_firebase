function creatorLastMessage(message) {
  return {
    text: message.text,
    time: message.time,
    status: message.status,
  };
}

export default creatorLastMessage;
