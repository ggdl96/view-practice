<template class="userList">
  <div>
    <div>
      <input type="text">
      <input type="text">
    </div>
   <button type="submit"></button>
  </div>
</template>

<script>
export default {
  name: 'userForm',
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

