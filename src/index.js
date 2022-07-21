// import _ from 'lodash';
import './style.css';
import postScore from './modules/post.js';
import refresh from './modules/refresh.js';
import './modules/images/icons8-pixel-star-96.png'

document.querySelector('.form').addEventListener('submit', postScore);
document.querySelector('.refresh-buttom').addEventListener('click', refresh);