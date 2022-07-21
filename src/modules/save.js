import data from './data.js';

const saveData = () => {
  localStorage.setItem('Data', JSON.stringify(data));
};

export default saveData;