<template>
  <div id="">
    <Header />
    <MsgBody />
  </div>
</template>
<script>
import Header from '../components/messages/Header';
import MsgBody from '../components/messages/MsgBody';


export default {
  name: "Messages",
  components: {
    Header,
    MsgBody
  },
  data: function(){
    return {
    }
  }
}
</script>

