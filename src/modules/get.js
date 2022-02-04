const getData = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/iVv01kAvbITqAz9e2ucb/scores');
  const data = await response.json();
  return data;
};

export default getData;
