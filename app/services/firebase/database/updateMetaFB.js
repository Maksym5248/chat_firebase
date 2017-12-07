import ref from './ref';
import url from '../../../constants/url';

function updateMetaFB(idChat, meta) {
  return Promise.resolve(ref(`${url.chatList}/${idChat}/meta`).update(meta));
}

export default updateMetaFB;
