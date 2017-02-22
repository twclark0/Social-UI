import data from '../services/nuviData.js';

// async action creator

export const nuviData = () => dispatch =>
    data().then( notes => dispatch({type: 'NEW_DATA', notes : notes || []}) );
