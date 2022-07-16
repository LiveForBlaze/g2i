export const getQuestionList = (cb: () => void) => {
  return fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      .then((res) => res.json()
      .then((resp) => resp.results))
      .finally(() => cb && cb());
}