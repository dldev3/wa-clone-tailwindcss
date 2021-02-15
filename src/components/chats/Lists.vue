<template>
  <div id="">
    <section class="m-2 flex">
      <div class="w-2/12">
        <img class="w-12 h-12 rounded-full" :src="data.image" alt="">
      </div>
      <article class="py-1 w-10/12 border-b-2 border-gray-100">
        <div class="flex justify-between mb-1">
          <h2 class="font-bold text-lg">{{ data.name }}</h2>
          <p><span v-if="data.count != null" class="text-green-500">{{data.time}}</span><span v-else class="text-gray-400">{{data.time}}</span></p>
        </div>

        <div class="flex justify-between mb-1">
          <p class="truncate w-full text-gray-400">{{ data.message }}</p>
                    
          <p v-if="data.count != null" class="bg-green-500 rounded-full text-white w-5 h-5 text-center text-sm">{{ data.count }}</p>
        </div>

      </article>
    </section>
  </div>
</template>
<script>
export default {
  props: ['data'],
  name: "Lists",
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
</style>
