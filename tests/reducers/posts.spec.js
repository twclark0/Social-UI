import expect from 'expect';
import nuvi from '../../client/reducers/nuvi.js';

describe('Data Reducer', function () {

  it('should add fetched data to reducer', function () {
    const action = { type: 'NEW_DATA', notes : ['test'] };
    const actual = nuvi([], action);
    expect(actual.length).toEqual(action.notes.length);
  });

})
