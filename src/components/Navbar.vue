<template>
  <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="width-limit">
      <!-- 左上方 Logo -->
      <a class="logo" href="/"><img src="../assets/LOGO.png" alt="Nav logo" width="100" height="40"></a>
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu" aria-expanded="false">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="menu">
          <ul class="nav navbar-nav">
            <!--<li class="tab active">
              <a href="/">
                <span class="menu-text">首页</span><i class="iconfont ic-navigation-discover menu-icon"></i>
              </a>
            </li>-->
            <li class="search">
              <form target="_blank" action="/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="✓">
                <input type="text" name="q" id="q" value="" autocomplete="off" placeholder="搜索" class="search-input" data-mounted="1">
                <a class="search-btn" href="javascript:void(null)"><i class="iconfont ic-search"></i></a>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Navbar'
}
</script>
