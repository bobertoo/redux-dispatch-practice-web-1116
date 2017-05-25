export let state;

export function managePets(state = { pets: [] }, action){
  switch (action.type) {
    case 'ADD_PET':
      return {
        pets: [
          ...state.pets,
          action.payload
        ]
      };
    case 'REMOVE_PET':
      return {
        pets: [
          ...state.pets.filter(pet => pet.id !== action.payload)
        ]
      };
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action);
  render();
}

export function render(){
  let renderString = '<ul>';
  state.pets.forEach(pet => renderString += `<li>${pet.name}</li>`);
  renderString +=  '</ul>';

  let container = document.getElementById('container');
  container.innerHTML = renderString;
}
