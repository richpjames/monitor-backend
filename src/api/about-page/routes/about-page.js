module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/about-page',
      handler: 'about-page.find',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/about-page',
      handler: 'about-page.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/about-page',
      handler: 'about-page.delete',
      config: { policies: [] }
    }
  ]
}