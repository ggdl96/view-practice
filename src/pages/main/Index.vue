<template>
  <div>
    <HelloWorld/>
    <UserList :users="users"/>
  </div>
</template>

<script>
import HelloWorld from './../../components/HelloWorld.vue'
import UserList from './../../components/UserList.vue'
import UserStore from '../../store/user.store'

export default {
  components: {
    HelloWorld, UserList
    },
    data () {
      return {
        users: UserStore.getAll(),
      }
  }
}
</script>
