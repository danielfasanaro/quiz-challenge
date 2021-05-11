export async function fetchNewToken() {
  try {
    const endpoint = 'https://opentdb.com/api_token.php?command=request';
    const fetchResponse = await fetch(endpoint);
    if (!fetchResponse.ok) throw new Error(fetchResponse.statusTexte);
    const fetchResult = await fetchResponse.json();
    localStorage.setItem('token', fetchResult.token);
  } catch (err) {
    console.error(err);
  }
}

export async function fetchQuestions(token) {
  try {
    const endpoint = `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean&token=${token}`;
    const fetchResponse = await fetch(endpoint);
    if (!fetchResponse.ok) throw new Error(fetchResponse.statusText);
    const fetchResult = await fetchResponse.json();
    return fetchResult.results;
  } catch (err) {
    console.error(err);
  }
}
