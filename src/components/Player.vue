<script setup>
import { ref} from 'vue';
import EventBus from '../util/EventBus';

const jdt=ref(0);
const audio=ref(0);
const musicpath=ref(0);
musicpath.value="/童话镇 - 暗杠.flac"
EventBus.on('setmusic',data=>{musicpath.value=data.path })
function update(){
jdt.value.value=(audio.value.currentTime*300)/audio.value.duration

}
function changet(){
    audio.value.currentTime=(audio.value.duration*jdt.value.value)/300
}
function play(){
    audio.value.play();
    
}

</script>
<template>
    <audio  @timeupdate="update" ref="audio" controls preload="metadata" :src=musicpath></audio>
    <br>
    <button @click="play">播放</button>
    <input @input="changet" ref="jdt" type="range" max="300" > 
</template>