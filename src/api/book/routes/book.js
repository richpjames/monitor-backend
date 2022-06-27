module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/books',
      handler: 'book.find',
      config: { policies: [] }
    },
    {
      method: 'GET',
      path: '/books/:id',
      handler: 'book.findOne',
      config: { policies: [] }
    },
    {
      method: 'POST',
      path: '/books',
      handler: 'book.create',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/books/:id',
      handler: 'book.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/books/:id',
      handler: 'book.delete',
      config: { policies: [] }
    }
  ]
}