<template>
    <div>
      <div id="comment-list" class="comment-list">
        <comment-box :article-id = articleId  @add-comment="appendComment"></comment-box>
        <div>
          <div>
            <div>
              <div class="top-title"><span>190条评论</span>
                <a class="close-btn" style="display: none;">关闭评论</a>
              </div>
              <ul class="comment-list-ul">
                <li class="comment" v-for="comment in commentList" v-bind:key="comment.aid">
                <div class="author">
                  <div data-v-f3bf5228="" class="v-tooltip-container" style="z-index: 0;">
                    <div class="v-tooltip-content">
                      <a href="/u/fee4b4b0b89e" target="_blank" class="avatar">
                        <img src="//upload.jianshu.io/users/upload_avatars/4082943/3f091fa05686.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114"></a>
                    </div>
                  </div>
                  <div class="info">
                    <span>{{comment.name}}</span>
                    <div class="meta">
                      <span>2018.03.28 17:45</span>
                    </div>
                  </div>
                </div>
                <div class="comment-wrap">
                  <p>{{comment.content}}</p>
                  <div class="tool-group">
                    <a class="" @click ="toggleCommentBox">
                      <i class="iconfont ic-comment"></i>
                      <span>回复</span>
                    </a>
                    <div v-show="showBox" class="sub-comment-box">
                      <comment-box></comment-box>
                    </div>
                  </div>
                </div>
              </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import CommentBox from './CommentBox'
export default {
  components: {CommentBox},
  name: 'CommentList',
  props: ['articleId'],
  data () {
    return {
      commentList: [],
      aid: '',
      showBox: false
    }
  },
  watch: {
    articleId: function (newVal, oldVal) {
      this.aid = newVal
      this.getAllCommentsById()
    }
  },
  component: {
    // someComponent
  },
  mounted () {
    this.getAllCommentsById()
  },
  methods: {
    getAllCommentsById: function () {
      let articleId = this.aid
      this.$http.get('/api/article/getCommentList', {
        params: {
          aid: articleId
        }
      }).then((res) => {
        if (res.body.code === 0) {
          this.commentList = res.body.data.commentList
        }
      })
    },
    appendComment (item) {
      this.commentList.splice(0, 0, item)
    },
    toggleCommentBox () {
      console.log('1234')
      this.showBox = true
    }

  }
}
</script>

<style scoped>
  .hidden {
    display: none;
  }
  .comment-list{
    color:#333;
    font-size: 17px;
    font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
  }
  .top-title{
    padding-bottom: 20px;
    font-size: 17px;
    font-weight: 700;
    border-bottom: 1px solid #f0f0f0;
  }
  .comment-list .comment {
    padding: 20px 0 30px;
    border-bottom: 1px solid #f0f0f0;
  }
  .v-tooltip-container {
    position: relative;
    display: inline-block;
  }
  .comment-list .author {
    margin-bottom: 15px;
  }
  .comment-list .info {
    display: inline-block;
    vertical-align: middle;
  }
  .comment-wrap p {
    font-size: 16px;
    margin: 10px 0;
    line-height: 1.5;
    word-break: break-word!important;
  }
  .tool-group a{
    margin-right: 10px;
    font-size: 0;
    color: #969696;
    display: inline-block;
  }
  .tool-group a i{
    margin-right: 5px;
    font-size: 18px;
    vertical-align: middle;
  }

  .iconfont {
    font-family: iconfont!important;
    font-size: inherit;
    font-style: normal;
    font-weight: 400!important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .comment-list .tool-group a span {
    vertical-align: middle;
    font-size: 14px;
  }
  .comment-list .meta {
    font-size: 12px;
    color: #969696;
  }
</style>
