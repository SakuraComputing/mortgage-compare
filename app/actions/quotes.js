export const addQuote = (quote) => ({
  type: 'ADD_QUOTE',
  quote
});

export const setQuotes = (quotes) => ({
  type: 'SET_QUOTES',
  quotes
});

export const removeQuote = ({ id } = {}) => ({
  type: 'REMOVE_QUOTE',
  id
});
