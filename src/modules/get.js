import rank from './rank'

const getData = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/iVv01kAvbITqAz9e2ucb/scores');
  const data = await response.json();
  
    data.result.sort((a, b) => +a.score > +b.score ? -1 : 1)

  rank(data.result)
  return data;
};

export default getData;
