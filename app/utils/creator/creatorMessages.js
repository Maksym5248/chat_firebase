function creatorMessages(idMessage, textMessage, statusMessage, authorId) {
  return {
    id: idMessage,
    text: textMessage,
    time: Date.now(),
    status: statusMessage,
    author: authorId,
  };
}

export default creatorMessages;
