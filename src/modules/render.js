const render = (list) => {
  const parent = document.querySelector('.scorelist');
  parent.innerHTML = '';
  list.forEach(({ user, score }) => {
    parent.innerHTML += `<li class="score">${user}: ${score}</li>`;
  });
};

export default render;