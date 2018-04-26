<template>
  <div class="comment-box-form">
    <form class="new-comment">
      <input type="text" class="comment-name" placeholder="你的名称（必填）"/>
      <textarea placeholder="写下你的神评论..."></textarea>
      <div class="write-function-block">
        <a class="btn btn-send">发送</a>
        <a class="cancel">取消</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CommentBox',
  data () {
    return {
    }
  },
  component: {
  }
}
</script>

<style scoped>
  .comment-box-form{
    width:620px;
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
</style>
