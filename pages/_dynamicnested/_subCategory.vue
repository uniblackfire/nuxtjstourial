<template>
  <div>
    <h1>_subCategory.vue param: {{ subDynamicName }}</h1>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  asyncData ({ route }) {
    return { subDynamicName: route.params.subCategory }
  }
}
</script>
