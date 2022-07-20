import data from './data.js';

const loadData = () => {
  const load = JSON.parse(localStorage.getItem('Data'));
  if (load) {
    load.forEach((e) => {
      data.push(e);
    });
  }
  return data;
};

export default loadData;