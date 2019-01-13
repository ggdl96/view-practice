import userApi from '../../api/user'

async function getUsers({commit, rootstate}) {
  try {
    const users = await userApi.getUsers()

    commit('setUsers', users)
  } catch (error) {
    console.log(error)
  }
}
