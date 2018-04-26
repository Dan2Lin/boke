<template>
    <div>
      <navbar></navbar>
      <div class="container index">
        <div class="row">
          <article-list></article-list>
          <type-module></type-module>
        </div>
      </div>
    </div>
</template>

<script>
import Navbar from './Navbar'
import ArticleList from './ArticleList'
import TypeModule from './TypeModule'
export default {
  name: 'Home',
  data () {
    return {}
  },
  components: {
    TypeModule,
    ArticleList,
    Navbar
  }
}
</script>

<style scoped>

</style>
