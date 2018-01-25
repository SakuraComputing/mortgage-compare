const quoteReducerDefaultState = [];
export default (state = quoteReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [
        ...state,
        action.quote
      ];
    case 'SET_QUOTES':
      return action.quotes;
    case 'REMOVE_QUOTE':
      return state.filter(({id} = {}) => id !== action.id);

    default:
      return state;
  }
};
