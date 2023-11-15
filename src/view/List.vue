<script setup>
import { onBeforeMount,ref } from 'vue';
import axios from 'axios'
import EventBus from '../util/EventBus';

const list=ref(0);
axios.get('/list.json',{responseType:"json"}).then(response => {
    list.value=response.data.list;
  console.log(list.value  );})
onBeforeMount(()=>{
  console.log(list.value  )


})
function setMusicPlay(musicpath){
  EventBus.emit('setmusic',{path:musicpath});
  
  

}
</script>
<template>
    <dev v-for="item in list" ><br><input type="checkbox"><a @click="setMusicPlay(item.filepath)">play</a>播放 {{item.musicname}} 下载</dev>
aaaaaaaawgferhrthrtth<br>
<br>
<h1>ads</h1>
</template>