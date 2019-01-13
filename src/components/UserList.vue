<template class="userList">
  <div>
    <h1>List</h1>
    <ul>
      <li
        v-for="user in users"
        :key="user.id"
      >
        {{user.firstName}}
        <span @click="countClick(user.id, event)">
          {{user.lastName}}
        </span>
        <span>{{user.clicks}}</span>
        <span @click="deleteUser(user.id, event)">delete</span>
      </li>
    </ul>
  </div>
</template>

<script>
import UserStore from '../store/user.store'

export default {
  name: 'userList',
  data () {
    return {
      users: UserStore.getAll()
    }
  },
  methods: {
    countClick: function (id, event) {
      UserStore.countClick(id)
    },
    deleteUser: function (id, event) {
      UserStore.delete(id)
    }
  }
}
</script>

<style scoped>
  li {
    background: gray;
    color: red;
    margin: 2px 0px;
  }

  li > span {
    width: 22%;
    background: white;
  }

</style>
