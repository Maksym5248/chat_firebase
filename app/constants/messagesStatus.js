export default {
  READ: 'READ', // Прочитано
  SENDING: 'SENDING', // Відправляється
  NOTSEND: 'NOTSEND', // Невідправлено
  DELIVERED: 'DELIVERED', // Доставлего
};

// 1 - після початку відправлення  - SENDING
// 2 - коли прийде до користувача статус змінюється на доставлено - DELIVERED
// 3 - коли користувач преребуває на екрані повідомленя стає прочитаним - READ