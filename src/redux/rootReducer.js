const initialState = {
  count: 0
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'INCREMENT_UP':
      return { ...state, count: state.count + 1 }
     case 'INCREMENT_DOWN':
      return { ...state, count: state.count - 1 }
    default:
      return state;
  }
}