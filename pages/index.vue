<template>
  <div class="container">
    <div class="box">
      <h1>首页</h1>
      <nuxt-link to="/about">
        About
      </nuxt-link>
      <b-button>测试按钮</b-button>
      <div>
        <div
          v-for="post in postList"
          :key="post.id"
        >
          {{ post.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $http }) {
    const url = 'api/post/list'
    const response = await $http.$get(url)
    return {
      postList: response.result
    }
  }
}
</script>

<style>
</style>
