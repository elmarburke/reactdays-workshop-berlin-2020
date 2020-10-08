// {
//   type: "FETCH_MESSAGES",
//   isApiRequest: true,
//   url: "/messages.json",
// }

const apiMiddleware = (store: any) => (next: any) => (action: any) => {
  if (action.isApiRequest) {
    store.dispatch({ type: `${action.type}_LOADING` });
    fetch(`http://localhost:4712${action.url}`)
      .then((response) => response.json())
      .then((data) => {
        if (action.property) {
          store.dispatch({
            type: `${action.type}_SUCCEEDED`,
            payload: {
              [action.property]: data,
            },
          });
        } else {
          store.dispatch({
            type: `${action.type}_SUCCEEDED`,
            payload: data,
          });
        }
      });
    return;
  }
  return next(action);
};

export default apiMiddleware;
