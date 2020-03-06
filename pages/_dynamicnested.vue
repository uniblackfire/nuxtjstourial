<template>
  <div>
    <h1>_dynamicnested param: {{ dynamicNestedName }}</h1>
    <nuxt-child/>
  </div>
</template>

<script>
export default {
  asyncData ({ route }) {
    return { dynamicNestedName: route.params.dynamicnested }
  }
}
</script>
