module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/background-colours',
      handler: 'background-colour.find',
      config: { policies: [] }
    },
    {
      method: 'GET',
      path: '/background-colours/:id',
      handler: 'background-colour.findOne',
      config: { policies: [] }
    },
    {
      method: 'POST',
      path: '/background-colours',
      handler: 'background-colour.create',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/background-colours/:id',
      handler: 'background-colour.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/background-colours/:id',
      handler: 'background-colour.delete',
      config: { policies: [] }
    }
  ]
}