import moment from 'moment';

function withMoment(time) {
  const difference = Date.now() - time;
  const day = 3600 * 24 * 1000;

  if (difference > day) {
    return 'Вчора';
  }

  if (difference > day * 2) {
    return moment(time).format('DD:MM');
  }

  return moment(time).format('kk:mm');
}

export default withMoment;
