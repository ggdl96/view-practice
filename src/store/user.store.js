const users = [
  {id: 1, firstName: 'Sebastian', lastName: 'Eschweiler', 'clicks': 0},
  {id: 2, firstName: 'Bill', lastName: 'Smith', 'clicks': 0},
  {id: 3, firstName: 'John', lastName: 'Porter', 'clicks': 0}
]

const UserStore = {
  debug: true,
  state: {
    message: 'Hello!'
  },
  getAll () {
    return users
  },
  countClick (id) {
    users.forEach((value, index) => {
      if (value.id === id) {
        users[index].clicks++
      }
    })
  }
}

export default UserStore
