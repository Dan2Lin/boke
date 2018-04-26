<template>
  <div class="col-xs-7 col-xs-offset-1 aside">
    <div class="board">
      <a href="#" v-for="tlist in typeList" v-bind:key="tlist.typeId">
        <div class="typeWrapper">
            {{tlist.typeContent}} <span class="type-arrow"> > </span>
        </div>
      </a>
    </div>
    <a id="index-aside-download-qrbox" class="col-xs-8 download" data-toggle="popover" data-placement="top" data-html="true" data-trigger="hover" data-content="" href="" data-original-title="" title="">
      <img class="qrcode" src="../assets/qrcode-wechat.png" alt="Download index side qrcode">
      <div class="info">
        <div class="title">关注微信公众号<i class="iconfont ic-link"></i></div>
        <div class="description">即刻获取最新动态</div>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: 'TypeModule',
  data () {
    return {
      typeList: null
    }
  },
  mounted () {
    this.getTypeList()
  },
  methods: {
    getTypeList () {
      this.$http.get('http://118.24.20.254:8080/blog/articleType/getAllArticleType')
        .then(response => {
          if (response.body.code === 0) {
            this.typeList = response.body.data.articleTypes
            this.getBackground()
          }
        }, err => {
          console.log(err)
        })
    },
    getBackground () {
      const colors = ['#FEBB50', '#F69581', '#C1E4DE', '#B7D6EC', '#0278AE', '#A5ECD7']
      this.$nextTick(() => {
        const alldiv = document.getElementsByClassName('typeWrapper')
        var arr = this.getRandomArr(0, 5, alldiv.length)
        for (let j = 0; j < arr.length; j++) {
          alldiv[j].style.backgroundColor = colors[j]
        }
      })
    },
    getRandomArr (start, end, len) {
      const arr = []
      function _inner (start, end) {
        var span = parseInt(end) - parseInt(start)
        return Math.floor(Math.random() * span + parseInt(start))
      }
      while (arr.length < len) {
        var num = _inner(start, end)
        if (arr.indexOf(num) === -1) {
          arr.push(num)
        }
      }
      return arr
    }
  }
}
</script>
<style>
  .typeWrapper{
    width:280px;
    height:40px;
    border-radius: 10px;
    margin-top: 10px;
    line-height: 40px;
    vertical-align: middle;
    color: #f0f0f0;
    font-size: 16px;
    padding-left:30px;
    font-weight: bold;
  }
  a:visited,a:hover {
    text-decoration: none;
  }
  .type-arrow {
    display: inline-block;
    position: relative;
    float: right;
    padding-right: 30px;
  }
  .index .aside .download {
    margin-top: 30px;
    padding: 10px 22px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff
  }

  body.reader-night-mode .index .aside .download {
    opacity: .85;
    border-color: #2f2f2f
  }

  .index .aside .download .qrcode {
    width: 60px;
    height: 60px;
    opacity: .85
  }

  .index .aside .download .info {
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px
  }

  .index .aside .download .info .title {
    font-size: 15px;
    color: #333
  }

  .index .aside .download .info .description {
    margin-top: 4px;
    font-size: 13px;
    color: #999
  }

  .index .aside .popover,.index .aside .popover .popover-content {
    background-color: #fff!important
  }

  .index .aside .popover-content {
    padding: 10px;
    border: none
  }

  .index .aside .popover-content img {
    width: 160px;
    height: 160px
  }

</style>
