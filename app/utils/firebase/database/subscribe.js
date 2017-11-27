import firebase from '../initializeApp';

function ref(url) {
  return commentsRef.on('child_changed', (data) => {
    // addCommentElement(postElement, data.key, data.val().text, data.val().author);
  });
}

export default ref;
