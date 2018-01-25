const quoteReducerDefaultState = [];
export default (state = quoteReducerDefaultState, action) => {
  switch (action.type) {
    case 'REMOVE_COMPARISON':
      return state.filter(({id} = {}) => id !== action.id);
    default:
      return state;
  }
};
