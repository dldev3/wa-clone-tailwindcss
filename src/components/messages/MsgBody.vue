<template>
    <div>
       <section class="h-screen" :style="{backgroundImage: `url('https://images.unsplash.com/photo-1546656592-5edfb3593a2f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=562&q=80')`}">
        <article 
                v-for="(msg, i) in messages" 
                :key="i" 
                class="p-2 flex"
                :class="msg.name == 'You' ? 'justify-end' : ''"
                >
            <div 
                class="bg-white shadow-lg rounded pb-2 px-2 w-9/12"
                :class="msg.name == 'You' ? 'bg-wa-lighter' : 'bg-white'"
            >
            <span :class="msg.name != 'You' ? 'material-icons text-5xl text-white absolute left-0 -mt-5 -ml-3' : 'material-icons text-5xl wa-lighter absolute right-0 -mt-5 -mr-3' ">arrow_drop_down</span>
                <h1 class="text-red-400 font-medium">{{ msg.name }}</h1>
                <div>
                    <p class="font-normal">{{ msg.message }}</p>
                    <p class="text-xs text-gray-400">{{ msg.time }}</p>
                </div>
            </div>
        </article>
       </section>
    </div>
</template>

<script>
import messages from '../../data/messages.js';

export default {
    name: "MsgBody",
    data: function(){
        return {
            messages: messages
        }
    }
}
</script>