<template>
  <div class="comment-box-form">
    <div v-if="errors.length">
      <ul>
        <li class='error-msg' v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
    </div>
    <form class="new-comment">
      <input type="text" class="comment-name" v-model="username" placeholder="你的名称（必填）"/>
      <textarea placeholder="写下你的神评论..." v-model= "content"></textarea>
      <div class="write-function-block">
        <a class="btn btn-send" v-on:click ="addComment">发送</a>
        <a class="cancel" v-on:click="cancelComment">取消</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CommentBox',
  data () {
    return {
      errors: [],
      username: null,
      content: null
    }
  },
  component: {
  },
  mounted () {
  },
  props: ['articleId'],
  methods: {
    addComment: function () {
      if (this.username && this.content) {
        var param = {
          aid: this.articleId,
          cid: '',
          parent_id: null,
          name: this.username,
          content: this.content
        }
        this.$http.post('/api/article/addComment', param, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        })
          .then(res => {
            if (res.body.code === 0) {
              // 刷新评论列表
              this.$emit('add-comment', param)
              this.username = null
              this.content = null
            }
          }, err => {
            console.log(err.body.message)
          })
      }
      this.errors = []
      if (!this.username) {
        this.errors.push('用户名不能为空')
      }
      if (!this.content) {
        this.errors.push('评论内容不能为空')
      }
    },
    cancelComment: function () {
      this.username = null
      this.content = null
    }
  }
}
</script>

<style scoped>
  .comment-box-form {
    width:620px;
    margin-top: 30px;
  }
  form{
    margin:0 0 20px;
  }
  .new-comment .comment-name{
    width: 100%;
    height: 30px;
    padding:15px;
    margin-bottom: 10px;
    border: 1px solid #dcdcdc;
    font-size: 13px;
    background-color: hsla(0,0%,71%,.1);
  }
  .new-comment textarea{
    padding: 10px 15px;
    width: 100%;
    height: 80px;
    font-size: 13px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    background-color: hsla(0,0%,71%,.1);
    resize: none;
    display: inline-block;
    vertical-align: top;
    outline-style: none;
  }
  .write-function-block{
    height: 50px;
  }
  .btn-send{
    float: right;
    width:78px;
    margin:10px 0;
    background: #42c02e;
    color:#ffffff!important;
    font-size: 16px;
    padding:8px 18px;
    cursor: pointer;
    border-radius: 20px;
  }
  .cancel{
    float: right;
    font-size:16px;
    color:#969696;
    margin:18px 30px 0 0;
  }
  .error-msg{
    color: #f00;
    font-size: 14px;
  }
</style>
