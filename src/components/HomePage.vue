<template>
  <div style="display: flex">
    <div class="container-left">
      <div class="tech-art">
        <p>  AMS</p>
      </div>
      <div class="techart-quote">
        <p>Asset Management System</p>
        <p style="font-size:15px;margin-top:60px;">One application that keep tracks of your organization assets<br/></p>
      </div>
      <div style="margin-top:40px;">
      </div>
    </div>
    <div class="container-right">
        <LoginForm />
    </div>
    
  </div>
</template>

<script>
import LoginForm from './LoginForm.vue'
export default {
    components: {
        LoginForm
    }
};
</script>

<style scoped>
.container-left {
  display: block;
  height: 100vh;
  width: 100%;
}

.container-right {
  display: block;
  height: 100vh;
  width: 100%;
  /* background: rgb(249, 252, 255); */
}

.tech-art {
  font-size: 60px;
  margin-top: 98px;
  margin-left: 126px;
  margin-bottom: -135px;
}

.techart-quote {
  font-size: 10px;
  margin-top: 128px;
  margin-left: 136px;
}
</style>
