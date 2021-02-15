<template>
    <div class="bg-wa-dark p-4 text-white flex w-full">
        <router-link to="/">
            <i class="fas fa-arrow-left py-4 mr-2"></i>
        </router-link>
        <div id="prof_img" class="w-2/12">
            <img class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1613332658633-551aef234b70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="">
        </div>
        <div class="d_details">
            <h1 class="font-medium text-lg">Whitemans Chat</h1>
            <p id="members" class="text-sm">Alice, Francis, Jack, Ned, Peter</p>
        </div>
        <div class="d_options ml-12">
            <span class="material-icons transform -rotate-45 mr-3">attach_file</span>
            <span class="material-icons">more_vert</span>
        </div>
    </div>
</template>


<script>

export default {
   name: "Header",
   data: function(){
       
   },

}
</script>

