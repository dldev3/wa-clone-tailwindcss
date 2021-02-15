<template>
  <div class="app">
    <Notification />
    <router-view/>
  </div>
</template>
<script type="text/javascript">
import Notification from './components/android/Notification';

export default {
    components: {
      Notification
    }
  }
</script>
<style lang="scss">

</style>
