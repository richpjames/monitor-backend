module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/intro-page',
      handler: 'intro-page.find',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/intro-page',
      handler: 'intro-page.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/intro-page',
      handler: 'intro-page.delete',
      config: { policies: [] }
    }
  ]
}