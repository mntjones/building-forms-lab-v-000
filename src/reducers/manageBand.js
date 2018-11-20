<<<<<<< HEAD
export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type){
    case 'ADD_BAND':
      return { ...state, bands: [...state.bands, action.band] }
    default:
      return state
  }

};
=======
export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return {...state, bands: [...state.bands, action.band ]};

    default:
      return state;
}
>>>>>>> 32ef10727b1e52af53ea44d7c985a5d493a40585
