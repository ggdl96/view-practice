<template>
  <div>
    <HelloWorld/>
    <UserForm/>
    <UserList/>
  </div>
</template>

<script>
import HelloWorld from './../../components/HelloWorld.vue'
import UserList from './../../components/UserList.vue'
import UserForm from './../../components/UserForm.vue'

export default {
  components: {
    HelloWorld, UserList, UserForm
  }
}
</script>
