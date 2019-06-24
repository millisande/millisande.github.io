<template>
<div class="header">
   <h1>millisande</h1>
</div>
<div class="container">
  <div class="dials">
      <img id="dial" src="../assets/Dial_Icon.png">
      <div class="marks">
        <img id="marker1" src="./images/marker.png">
        <img id="marker2" src="./images/marker.png">
        <img id="marker3" src="./images/marker.png">
      </div>
    </div>
  </div>
  <hello-component name="World" />
</template>

<script>
import HelloComponent from './components/HelloComponent.vue'
export default {
  components: {
    HelloComponent
  }
}
</script>
