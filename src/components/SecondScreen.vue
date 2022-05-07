<template>
  <div>
      <div v-if="checkLogin === 'true'">
          <DashBoard />
      </div>
      <div v-else>
          <p>your session has been expired, please login again
              <a href="/login">click here</a>
          </p>
      </div>
  </div>
</template>

<script>
import DashBoard from "./DashBoard.vue";
export default {
    name : "SecondScreen",
    data() {
        return {
            checkLogin: false
        }
    },
    components:{DashBoard},
    created() {
        this.checkLogin = sessionStorage.getItem("loginSuccess");
        console.log(typeof(this.checkLogin))
    }
}
</script>

<style>

</style>