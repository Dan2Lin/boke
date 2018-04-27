<template>
    <div>
      <div id="comment-list" class="comment-list">
        <comment-box :article-id = articleId></comment-box>
        <div id="normal-comment-list" class="normal-comment-list">
          <div>
            <div>
              <div class="top-title"><span>190条评论</span>
                <a class="close-btn" style="display: none;">关闭评论</a>
              </div>
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
  data () {
    return {
      msg: 'Hello Vue.js'
    }
  },
  props: ['articleId'],
  component: {
    // someComponent
  }
}
</script>

<style scoped>
  .top-title{
    padding-bottom: 20px;
    font-size: 17px;
    font-weight: 700;
    border-bottom: 1px solid #f0f0f0;
  }
</style>
