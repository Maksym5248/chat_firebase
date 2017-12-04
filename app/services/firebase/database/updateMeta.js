import ref from './ref';
import url from '../../../constants/url';

function updateMeta(idChat, meta) {
  ref(`${url.chatList}/${idChat}/meta`).update(meta);
}

export default updateMeta;
