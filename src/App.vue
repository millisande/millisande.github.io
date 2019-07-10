<template>
<div>
<div class="header">
   <h1>millisande</h1>
</div>
  <dial-component />
  <hello-component name="World" />
</div>
</template>

<script>
import HelloComponent from './components/HelloComponent.vue'
import DialComponent from './components/DialComponent.vue'
export default {
  components: {
    HelloComponent,
    DialComponent
  }
}
</script>
