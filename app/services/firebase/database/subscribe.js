import ref from './ref';
// повертаються не проміси можливо варто переробити під проміси
async function added(url, functionCallBack) {
  return Promise.resolve(ref(url).on('child_added', functionCallBack));
}

async function changed(url, functionCallBack) {
  return Promise.resolve(ref(url).on('child_changed', functionCallBack));
}

async function removed(url, functionCallBack) {
  return Promise.resolve(ref(url).on('child_removed', functionCallBack));
}

const subscribe = {
  added,
  changed,
  removed,
};

export default subscribe;


// users.on('child_added', function(data) {
//   addCommentElement(postElement, data.key, data.val().text, data.val().author);
// });
//
// commentsRef.on('child_changed', function(data) {
//   setCommentValues(postElement, data.key, data.val().text, data.val().author);
// });
//
// commentsRef.on('child_removed', function(data) {
//   deleteComment(postElement, data.key);
// });
