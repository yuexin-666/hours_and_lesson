<template>
  <div>
     <div>
       <div class="Classes_button">
           <button @click="tiao" class="Classes_button_button">立即约课</button>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    tiao(){
      this.$router.push({
        path:'/tutoring'
      })
    }
  },
}
</script>

<style scoped>
.Classes_button_button{
  background: rgb(235, 97, 0);
  border: none;
  color: white;
  margin-left:2.9rem ;
  margin-top:4.5rem ;
  font-size:0.35rem;
  font-weight:100 ;
}
</style>