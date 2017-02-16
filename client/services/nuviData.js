export default () => {
  return (
    fetch(`https://nuvi-challenge.herokuapp.com/activities`, {
      credentials : 'same-origin',
      headers: {'Accept': 'application/json'}
    })
        .then(response =>
            response.ok ? response.json() : Promise.reject(response) )
  );
}
