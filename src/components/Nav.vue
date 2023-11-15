<script setup>
import { onMounted, ref } from "vue";
var nav_state=true;
const nav = ref(0);
const Width = ref(0);
const nav_btn = ref(0);
onMounted(() => {
  
  Width.value = nav.value.offsetWidth;
  nav_btn.value.style.marginLeft = Width.value + "px";
  if(sessionStorage.getItem("nav_state")){
 nav_state=sessionStorage.getItem("nav_state"); 
 if (nav_state){
  nav_state=false;
 hide_nav();
 }
}
else{
  nav_state=false;
  sessionStorage.setItem("nav_state",nav_state)
}
});

function hide_nav() {
  Width.value = nav.value.offsetWidth;
  nav_btn.value.style.marginLeft = Width.value + "px";
  nav_state = !nav_state;
  sessionStorage.setItem("nav_state",nav_state);
  if (nav_state) {
    nav.value.style.marginLeft = "-" + Width.value + "px";
    nav_btn.value.style.marginLeft = 0;
    nav_btn.value.style.transform = "rotate(0)";
  } else {
    nav.value.style.marginLeft = 0;
    nav_btn.value.style.marginLeft = Width.value + "px";
    nav_btn.value.style.transform = "rotate(180deg)";
  }
}
</script>
<template>
  <div>
    <div class="nav" id="nav" ref="nav">
      <router-link align="center" to="/list">
        <div id="profile_bg">
          <img id="profile_pic" src="../assets/tx.png" alt="头像" />
        </div>
      </router-link>

      <ul class="left_menu">
        <li class="nav-item">
          <router-link to="/homepage">主页</router-link>
        </li>
        <li>
          <router-link to="login">登录</router-link>
        </li>
        <li>
          <router-link to="/list">list</router-link>
        </li>
        <li>
          <a href="/login">登录2</a>
        </li>
      </ul>
      <h1>helloworld</h1>
    </div>
    <div>
      <button @click="hide_nav" class="nav_btn" id="btn" ref="nav_btn">
        <img class="nav_btn_img" src="../assets/1.png" />
      </button>
    </div>
  </div>
</template>


<style>
#profile_pic {
  width: 40%;
  margin-top: 20%;
  top: -100px;
}

#profile_bg {
  z-index: 999;
  height: 0px;
  width: 80%;
  padding-bottom: 80%;
  margin-top: 2.5vw;
  margin-left: 10%;
  border-radius: 50%;
  background-color: aliceblue;
}

.left_menu {
  margin-top: 5vw;
  text-align: center;
  list-style-type: none;
}

.nav {
  margin-top: 0;
  height: 100vh;
  width: 20vw;
  background-color: #39C5BB;
  transition: margin-left 1s;
  max-width: 300px;
  min-width: 200px;
  border-radius: 5px;
  position: fixed;
}

.nav_btn_img {
  width: 100%;
  height: 100%;
}
.nav_btn {
  border-color: cadetblue;
  border-style: solid;
  border-width: 3px;
  margin-top: 30vh;
  border-radius: 4px;
  margin-left: 20vw;
  transition: margin-left 1s, transform 0.5s;
  position: fixed;
  transform: rotate(180deg);
  height: 40px;
  width: 20px;
}

.btn_nav_hide {
  transform: rotate(180deg);
}
.nav {
  z-index: 999;
  position: fixed;
}

* {
  margin: 0;
  padding: 0;
  border: 0;
}
</style>