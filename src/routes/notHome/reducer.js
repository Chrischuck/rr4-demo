const initialState = {
  first: 1,
  second: 1,
  third: 1,
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'INCREMENT_FIB':
      return { ...state, third: state.third + state.second, second: state.third, first: state.second }
     case 'DECREMENT_FIB':
      return { ...state, third: state.second, second: state.first, first: state.second - state.first }
    default:
      return state;
  }
}