<template>
  <div>
    动态路由 其他页
  </div>
</template>

<script>
export default {
  asyncData (ctx) {
    // eslint-disable-next-line no-console
    console.log(ctx.route.params.dynamicname)
  }
}
</script>
