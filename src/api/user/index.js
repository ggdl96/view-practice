import { instance } from '../config'

function getUsers () {
  return instance.get('users')
}

export default { getUsers }
