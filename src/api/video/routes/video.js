module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/videos',
      handler: 'video.find',
      config: { policies: [] }
    },
    {
      method: 'GET',
      path: '/videos/:id',
      handler: 'video.findOne',
      config: { policies: [] }
    },
    {
      method: 'POST',
      path: '/videos',
      handler: 'video.create',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/videos/:id',
      handler: 'video.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/videos/:id',
      handler: 'video.delete',
      config: { policies: [] }
    }
  ]
}