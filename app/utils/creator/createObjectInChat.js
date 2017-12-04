function createObjectInChat(idChatt, idUser, currentUser) {
  return {
    idChat: idChatt,
    lastMessages: {
      chatWithUser: idUser,
      author: currentUser,
      text: 'Немає повідомлень',
      time: Date.now(),
    },
  };
}

export default createObjectInChat;
