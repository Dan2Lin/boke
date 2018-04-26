<template>
    <div>
      <div class="meta-bottom">
        <div class="like">
          <div class="btn like-group">
            <div class="btn-like">
              <a>喜欢</a>
            </div>
            <div class="modal-wrap">
              <a>718</a>
            </div>
          </div>
        </div>
        <div class="share-group">
          <a class="share-circle" data-action="weixin-share" data-toggle="tooltip" data-original-title="分享到微信">
            <i class="iconfont ic-wechat"></i>
          </a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'LikeComponnet',
  data () {
    return {
    }
  },
  component: {
    // someComponent
  }
}
</script>

<style scoped>
  .meta-bottom {
    margin-top:40px;
    margin-bottom: 80px;
  }
  .like{
    display: inline-block;
  }
  .like .like-group {
    position: relative;
    padding: 13px 0 15px 0;
    border: 1px solid #EA6F5A;
    border-radius: 40px;
  }
  .btn{

  }
  .btn-like{
    display: inline-block;
    font-size: 19px;
  }
  .btn-like a{
    position: relative;
    padding: 18px 30px 18px 55px;
    color: #EA6F5A;
  }
  .btn-like a:before{
    content: '';
    position: absolute;
    left: 25px;
    top: 23px;
    width: 20px;
    height: 20px;
    background-image: url('../assets/Heart.png');
    background-repeat: no-repeat;
    background-size: 20px;
  }
  .modal-wrap{
    display: inline-block;
    font-size:18px;
    border-left: 1px solid #ea6f5a;
  }
  .modal-wrap a{
    color: #EA6F5A;
    padding: 18px 26px 18px 18px;
  }
  .share-group{
    float: right;
    margin-top:6px;
  }
  .share-circle{
    width: 50px;
    height: 50px;
    margin-left: 5px;
    text-align: center;
    border: 1px solid #dcdcdc;
    border-radius: 50%;
    vertical-align: middle;
    display: inline-block;
  }
  .iconfont{
    font-family: iconfont!important;
    font-size: inherit;
    font-style: normal;
    font-weight: 400!important;
    -webkit-font-smoothing: antialiased;
  }
  .share-circle i{
    margin-top: 10px;
    font-size: 24px;
    line-height: 2;
  }
  .share-circle .ic-wechat{
    color: #00bb29;
  }
</style>
