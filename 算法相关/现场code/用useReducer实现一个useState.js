const useState = (initValue) => {
  const reducer = (state, action) => {
    const { data } = action ?? {};
    return data;
  };
  const [state, dispatch] = useReducer(reducer, initValue, init);

  return [
    state,
    (state) => {
      if (typeof state === "function") {
        const val = state();
        dispatch({
          data: val,
        });
      } else {
        dispatch({
          data: state,
        });
      }
    },
  ];
};
