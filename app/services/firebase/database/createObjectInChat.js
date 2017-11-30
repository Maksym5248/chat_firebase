function createObjectInChat(idChatt, idUser, data) {
  if (data) {
    return {
      idChat: data.val().idChat ? data.val().idChat : null,
      lastMessages: {
        autor: data.val().lastMessages.autor ? data.val().lastMessages.autor : 'none',
        text: data.val().lastMessages.text ? data.val().lastMessages.text : 'none',
        date: data.val().lastMessages.date ? data.val().lastMessages.date : 'none',
      },
    };
  }

  return {
    idChat: idChatt,
    lastMessages: {
      autor: idUser,
      text: 'Немає повідомлень',
      date: Date.now(),
    },
  };
}

export default createObjectInChat;
