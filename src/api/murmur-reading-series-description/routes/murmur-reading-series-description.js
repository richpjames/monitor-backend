module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/murmur-reading-series-description',
      handler: 'murmur-reading-series-description.find',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/murmur-reading-series-description',
      handler: 'murmur-reading-series-description.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/murmur-reading-series-description',
      handler: 'murmur-reading-series-description.delete',
      config: { policies: [] }
    }
  ]
}