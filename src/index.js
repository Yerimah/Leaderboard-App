import getData from './modules/get.js';
import postData from './modules/send.js';
import './style.css';
import render from './modules/render.js';

const form = document.querySelector('.formdata');

const startup = async () => {
  const list = await getData();
  render(list.result);
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const user = form.elements.user.value;
  const score = form.elements.score.value;

  form.reset();
  await postData({ user, score });
  startup();
});

startup();

const refreshbtn = document.querySelector('.refresh-btn');

refreshbtn.addEventListener('click', () => {
  const items = document.querySelector('.scorelist');

  while (items.firstChild) {
    items.removeChild(items.firstChild);
  }
});