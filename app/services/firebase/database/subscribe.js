import ref from './ref';
// повертаються не проміси можливо варто переробити під проміси


async function added(url, functionCallBack, error) {
  return Promise.resolve(ref(url).on('child_added', functionCallBack, error));
}

async function changed(url, functionCallBack, error) {
  return Promise.resolve(ref(url).on('child_changed', functionCallBack, error));
}

async function removed(url, functionCallBack, error) {
  return Promise.resolve(ref(url).on('child_removed', functionCallBack, error));
}

async function value(url, functionCallBack, failureCallbackOrContext) {
  return Promise.resolve(ref(url).on('value', functionCallBack, failureCallbackOrContext));
}

const subscribe = {
  added,
  changed,
  removed,
  value,
};

export default subscribe;

// async function added(url, functionCallBack, error) {
//   return Promise.resolve(ref(url).on('child_added', functionCallBack, error));
// }
//
// async function changed(url, functionCallBack, error) {
//   return Promise.resolve(ref(url).on('child_changed', functionCallBack, error));
// }
//
// async function removed(url, functionCallBack, error) {
//   return Promise.resolve(ref(url).on('child_removed', functionCallBack, error));
// }
//
// async function value(url, functionCallBack, failureCallbackOrContext) {
//   return Promise.resolve(ref(url).on('value', functionCallBack, failureCallbackOrContext));
// }

// function value(chatList, url, callBack, failureCallbackOrContext) {
//   return new Promise((resolve, reject) => {
//     ref(url).once('value', (data) => {
//       callBack(data, resolve, reject);
//     }, failureCallbackOrContext);
//
//   });
// }

// function addedd(url, callBack, failureCallbackOrContext) {
//   return new Promise((resolve, reject) => {
//     ref(url).on('child_added', (data) => {
//       callBack(data, resolve, reject);
//     }, failureCallbackOrContext);
//
//   });
// }
