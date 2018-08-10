<template class="userList">
  <div>
    <h1>List</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{user.firstname}} <span @click="a">A</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'userList',
  props: {
    users: {
      type: Array[Object],
      required: true
    }
  },
  methods:{
    a: function (event) {
      console.log('clicked');
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

