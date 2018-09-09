<template class="userList">
  <div class="form-body">
    <div class="input-row">
      <input type="text" placeholder="first name:" v-model="firstName">
      <input type="text" placeholder="last name:" v-model="lastName">
    </div>
    <button type="submit" @click="save()">Add User</button>
    <label v-show="!valid" for="all">Both fields are required!!</label>
  </div>
</template>

<script>
import UserStore from '../store/user.store'
export default {
  name: 'userForm',
  methods: {
    save () {
      this.blocked = true

      if (this.firstName && this.lastName) {
        const user = {
          firstName: this.firstName,
          lastName: this.lastName
        }

        UserStore.save(user)
      } else {
        this.valid = false
         this.blocked = false
      }
    }
  },
  data () {
    return {
      firstName: '',
      lastName: '',
      valid: true,
      blocked: false,
    }
  }
}
</script>

<style scoped>
  .form-body {
    padding: 12px;
    display: grid;
    grid-template-columns: 27% 8%;
  }
  .input-row {
    display: flex;
}
</style>

