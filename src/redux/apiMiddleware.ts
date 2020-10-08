// {
//   type: "FETCH_MESSAGES",
//   isApiRequest: true,
//   url: "/messages.json",
//   method: "POST"
//   data: {},
// }

const apiMiddleware = (store: any) => (next: any) => (action: any) => {
  if (action.isApiRequest) {
    store.dispatch({ type: `${action.type}_LOADING` });
    fetch(`http://localhost:4712${action.url}`, {
      method: action.method || "GET",
      body: JSON.stringify(action.data),
      headers: {
        "Content-Type": "application/json",
      },
    })
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
      })
      .catch((response) => {
        store.dispatch({
          type: "ADD_ENTRY_TO_API_REQUEST_QUEUE",
          payload: action,
        });
        store.dispatch({
          type: `${action.type}_FAILED`,
          response: response.statusCode,
        });
      });
    return;
  }
  return next(action);
};

export default apiMiddleware;
