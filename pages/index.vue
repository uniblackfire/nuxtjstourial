<template>
  <div>
    <h1>首页</h1>
    <h2>标题1</h2>
    <div>
      <div
        v-for="post in postList"
        :key="post.id"
      >
        {{ post.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $http }) {
    const url = 'http://jsonplaceholder.typicode.com/posts'
    const response = await $http.$get(url)
    return {
      postList: response
    }
  }
}
</script>

<style>
</style>
