<template>
  <div>
    _id {{ id }}
  </div>
</template>

<script>
export default {
  asyncData ({ params }) {
    return { id: params.id }
  }
}
</script>
