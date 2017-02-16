export default function currentData(state = [], action) {
  switch (action.type) {
    case 'NEW_DATA':
        return action.notes;
    default :
      return state;
  }
}
