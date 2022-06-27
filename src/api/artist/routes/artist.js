module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/artists',
      handler: 'artist.find',
      config: { policies: [] }
    },
    {
      method: 'GET',
      path: '/artists/:id',
      handler: 'artist.findOne',
      config: { policies: [] }
    },
    {
      method: 'POST',
      path: '/artists',
      handler: 'artist.create',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/artists/:id',
      handler: 'artist.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/artists/:id',
      handler: 'artist.delete',
      config: { policies: [] }
    }
  ]
}