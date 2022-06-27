module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/submissions',
      handler: 'submission.find',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/submissions',
      handler: 'submission.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/submissions',
      handler: 'submission.delete',
      config: { policies: [] }
    }
  ]
}