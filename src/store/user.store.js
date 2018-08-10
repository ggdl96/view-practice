const UserStore = {
  debug: true,
  state: {
    message: 'Hello!'
  },
  getAll () {
    const users = [
      {id: 1, firstname: 'Sebastian', lastname: 'Eschweiler'},
      {id: 2, firstname: 'Bill', lastname: 'Smith'},
      {id: 3, firstname: 'John', lastname: 'Porter'}
    ]

    return users
  }
}

export default UserStore
