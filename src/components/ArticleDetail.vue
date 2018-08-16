<template>
    <div>
      <navbar></navbar>
      <div class="post">
        <div class="article">
          <h1 class="title" v-if="article">{{article.title}}</h1>
          <div class="author">
            <a class="avatar" href="/u/9617ac822dc6">
              <img src="//upload.jianshu.io/users/upload_avatars/7523860/489033dd-a7d2-4ab0-88ab-a75fb884b8ef.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" alt="96">
            </a>
            <div class="info">
            <span class="name"><a href="/u/9617ac822dc6">大小乖</a></span>
            <img class="badge-icon" data-toggle="tooltip" title="" src="//upload.jianshu.io/user_badge/ac944899-bf5f-40df-b265-7d947fadd946" alt="Ac944899 bf5f 40df b265 7d947fadd946">
            <!-- 文章数据信息 -->
            <div class="meta">
              <!-- 如果文章更新时间大于发布时间，那么使用 tooltip 显示更新时间 -->
              <span class="publish-time" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="最后编辑于 2018.04.18 05:04">2018.04.16 07:27*</span>
              <span class="wordage">字数 1415</span>
              <span class="views-count">阅读 3012</span><span class="comments-count">评论 181</span><span class="likes-count">喜欢 129</span><span class="rewards-count ">赞赏 5</span></div>
          </div>
          </div>
          <div class="show-content" v-if="article" v-html="article.content"></div>
        </div>
        <div class="article-detail-footer">
          <comment-list  :article-id = "article.aId"></comment-list>
        </div>
      </div>
    </div>
</template>

<script>
import Navbar from './Navbar'
import LikeComponnet from './LikeComponent'
import CommentList from './CommentList'
export default {
  components: {
    CommentList,
    LikeComponnet,
    Navbar
  },
  name: 'ArticleDetail',
  data () {
    return {
      article: ''
    }
  },
  created () {
    var newsID = this.$route.params.aId
    this.getArticleById(newsID)
  },
  methods: {
    getArticleById (newsID) {
      this.$nextTick(function () {
        this.$http.get('/api/article/getArticleById/', {
          params: {
            aid: newsID
          }
        }).then(response => {
          if (response.body.code === 0) {
            this.article = response.body.data.article
          }
        }, res => {
          console.log('error')
        })
      })
    }
  }
}
</script>

<style scoped>
  .post {
    margin: 0 auto;
    padding-bottom: 40px;
    width: 620px;
  }
  .title{
    word-break: break-word!important;
    margin: 20px 0 0;
    font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.3;
  }
  a {
    color:#969696;
  }
  .img {
    vertical-align: middle;
  }
  .author {
    margin: 30px 0 40px;
  }
  .author .avatar{
    width: 48px;
    height: 48px;
    vertical-align: middle;
    display: inline-block;
    cursor: pointer;
  }
  .author .info{
    vertical-align: middle;
    display: inline-block;
    margin-left: 8px;
  }
  .author .name{
    margin-right: 3px;
    font-size: 16px;
    vertical-align: middle;
  }
  .author .info img.badge-icon {
    margin-right: 5px;
    width: 20px;
    height: 20px;
    border-radius: 0;
    border: 0;
  }
  .meta span{
    font-size: 12px;
    color: #969696;
  }
  .show-content {
    color: #2f2f2f;
    word-break: break-all;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
  }
</style>
