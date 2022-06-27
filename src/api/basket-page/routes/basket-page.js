module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/basket-page',
      handler: 'basket-page.find',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/basket-page',
      handler: 'basket-page.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/basket-page',
      handler: 'basket-page.delete',
      config: { policies: [] }
    }
  ]
}