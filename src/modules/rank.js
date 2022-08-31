const rank = (data) => {
  const firstName = document.querySelector('#higher-name1');
  const secondName = document.querySelector('#higher-name2');
  const thirdName = document.querySelector('#higher-name3');

  const firstScore = document.querySelector('#higher-score1');
  const secondScore = document.querySelector('#higher-score2');
  const thirdScore = document.querySelector('#higher-score3');

  firstName.innerHTML = data[0].user;
  secondName.innerHTML = data[1].user;
  thirdName.innerHTML = data[2].user;

  firstScore.innerHTML = data[0].score;
  secondScore.innerHTML = data[1].score;
  thirdScore.innerHTML = data[2].score;
};

export default rank;