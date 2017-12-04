export default {
  READ: 'прочитано', // Прочитано
  SENDING: 'надсилається', // Відправляється
  NOTSEND: 'не надіслано', // Невідправлено
  DELIVERED: 'отримано', // Доставлего
};

// 1 - після початку відправлення  - SENDING
// 2 - коли прийде до користувача статус змінюється на доставлено - DELIVERED
// 3 - коли користувач преребуває на екрані повідомленя стає прочитаним - READ
