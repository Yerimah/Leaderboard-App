const postData = async (score) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/iVv01kAvbITqAz9e2ucb/scores',
    {
      method: 'POST',
      body: JSON.stringify(score),
      headers: {
        'content-type': 'application/json',
      },
    });

  const data = await response.json();
  return data;
};

export default postData;
