function createObjectInChat(idChatt, idUser) {
  return {
    idChat: idChatt,
    lastMessages: {
      autor: idUser,
      text: 'Немає повідомлень',
      time: Date.now(),
    },
  };
}

export default createObjectInChat;
