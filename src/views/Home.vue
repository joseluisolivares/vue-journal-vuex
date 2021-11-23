<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> <br/> -->
    <button class="btn btn-success" @click="goToDayBook">Click me & go to DayBook</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    
  },
  methods:{
    goToDayBook(){
      this.$router.push({name:'no-entry'})
    }
  }
}
</script>
