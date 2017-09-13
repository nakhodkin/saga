function planet(state = {}, action) {
  if (action.type === 'GET_PLANET_SUCCEEDED') {
    return action.planet;
  }
  if (action.type === 'GET_PLANET_FAILED') {
    return action.e;
  }
  return state;
}

export default planet;
