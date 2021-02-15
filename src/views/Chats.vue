<template>
  <div>
    <ChatHeader />
    <div v-for="(chat,i) in chats" :key="i">
      <router-link to="/messages">
        <ChatList :data="chat" />
      </router-link>
    </div>
  </div>
</template>
<script>
import ChatHeader from '../components/chats/Header';
import ChatList from '../components/chats/Lists';
import chats from '../data/chats.js';

export default {
  name: "Chats",
  components: {
    ChatHeader,
    ChatList
  },
 data: function(){
   return {
     chats: chats
   }
 }
}
</script>

<style lang="scss" scoped>
</style>
