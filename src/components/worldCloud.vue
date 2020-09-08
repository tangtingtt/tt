<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="hovertreetags">
        <a href="http://hovertree.com/menu/java/" class="tagc1">Java</a>
        <a href="http://hovertree.com/menu/visualstudio/" class="tagc2">Visual Studio</a>
        <a href="http://hovertree.com/menu/javascript/" class="tagc5">JavaScript</a>
        <a href="http://hovertree.com/menu/php/" class="tagc2">PHP</a>
        <a href="http://hovertree.com/menu/jquery/" class="tagc2">jQuery</a>
        <a href="http://hovertree.com" class="tagc1">何问起</a>
        <a href="http://hwq2.com" class="tagc2">hwq2</a>
        <a href="http://hovertree.com/menu/texiao/" class="tagc5">网页特效</a>
        <a href="http://hovertree.com/menu/csharp/" class="tagc2">C#</a>
        <a href="http://hovertree.com/menu/bootstrap/" class="tagc2">Bootstrap</a>
        <a href="http://hovertree.com/menu/java/" class="tagc5">Java</a>
        <a href="http://hovertree.net" class="tagc2">hovertree.net</a>
        <a href="http://keleyi.com/" class="tagc1">柯乐义</a>
        <a href="http://keleyi.com/a/bjac/d863921ed93d03ff.htm" class="tagc2">a标签</a>
        <a href="http://hovertree.com/h/bjaf/l3c6nm7b.htm" class="tagc5">何问起键盘</a>
        <a href="http://hovertree.com/tiku/bjaf/5v9ps30o.htm" class="tagc2">数组</a>
        <a href="http://tool.hovertree.com/a/base64/" class="tagc2">Base 64</a>
        <a href="http://hovertree.com" class="tagc1">HoverTree</a>
        <a href="http://hovertree.com/code/css/4u8q30yw.htm" class="tagc2">CSS开门</a>
        <a href="http://hovertree.com/code/" class="tagc5">代码</a>
        <a href="http://hovertree.com/menu/css/" class="tagc2">CSS</a>
        <a href="http://hovertree.com/h/bjaf/c7lmaqjx.htm" class="tagc2">Bootstrap</a>
        <a href="http://hovertree.com/tiku/" class="tagc5">题库</a>
        <a href="http://hovertree.com/h/bjaf/kqud99m6.htm" class="tagc2">图标旋转</a>
    </div>
  </div>
</template>

<script>
import worldCloudJs from '../utils/worldCloud.js'
export default {
  name: 'worldCloud',
  data () {
    return {
      msg: '词云'
    }
  },
  mounted() {
      let that = this
       
  },
  methods: {

  }
}
</script>

<style scoped>
    .hovertreeinfo{text-align:center;margin-top:10px;}
    .hovertreeinfo a{color:black;}
    #hovertreetags {
    width: 500px;
    height: 500px;
    position: relative;
    font-size: 12px;
    color: #333;
    margin: 20px auto 0;
    text-align: center;
    border: 1px solid silver;
}

    #hovertreetags a {
        position: absolute;
        top: 0px;
        left: 0px;
        color: #333;
        font-family: Arial;
        text-decoration: none;
        margin: 0 10px 15px 0;
        line-height: 18px;
        text-align: center;
        font-size: 12px;
        padding: 1px 5px;
        display: inline-block;
        border-radius: 3px;
    }

        #hovertreetags a.tagc1 {
            background: #666;
            color: #fff;
        }

        #hovertreetags a.tagc2 {
            background: #F16E50;
            color: #fff;
        }

        #hovertreetags a.tagc5 {
            background: #006633;
            color: #fff;
        }

        #hovertreetags a:hover {
            color: #fff;
            background: #0099ff;
        }
</style>