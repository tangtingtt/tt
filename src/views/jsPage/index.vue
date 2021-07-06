<template>
   <div class="js-page-container">
        <div class="block">
            <codeExmaple :cur-code="curCode" title="数组求和"></codeExmaple>
        </div>
        <div class="block">
            <codeExmaple :cur-code="curCode2" title="数组求最大值"></codeExmaple>
        </div>
        <div class="block">
            <codeExmaple :cur-code="curCode3" title="数组求最小值"></codeExmaple>
        </div>
        <div class="block">
            <codeExmaple :cur-code="curCode4" title="data-* 属性"></codeExmaple>
        </div>
   </div>
</template>

<script>
import codeExmaple from '../../components/codeExmaple.vue';
export default {
    name: "JsPage",
    data() {
        return {
            editor: null,
            curCode:"const array  = [5,4,7,8,9,2];\n"+"array.reduce((a,b) => a+b);\n"+"// 输出: 35",
            curCode2:"const array  = [5,4,7,8,9,2];\n"+"array.reduce((a,b) => a>b?a:b);\n"+"// 输出: 9",
            curCode3: "const array  = [5,4,7,8,9,2];\n"+"array.reduce((a,b) => a<b?a:b);\n"+"// 输出: 2",
            curCode4: "这些data-*属性用于存储页面或应用程序私有的自定义数据。存储的数据可用于 JavaScript 代码以创建进一步的用户体验。\n"+
                        "data-* 属性由两部分组成：\n"+
                        "属性名称不应包含任何大写字母，并且必须在前缀“data-”之后至少长一个字符\n"+
                        "属性值可以是任何字符串\n\n"+
                        "<div id='data-attr' data-custom-attr='You are just Awesome!'></div>\n\n"+
                        "然后在 JavaScript 中，\n"+
                        "let value = document.getElementById('data-attr').dataset['customAttr']\n\n"+
                        "注意：要在 JavaScript 中读取这些属性的值，您可以使用getAttribute()它们的完整 HTML 名称（即 data-custom-attr），但标准定义了一种更简单的方法：使用dataset属性。"
        }
    },
    mounted() {
    },
    components:{
        codeExmaple
    }
}

</script>

<style scoped lang="scss">
.block {
    padding: 20px;
    border:1px solid;
    margin-bottom: 12px;
}
.block-title {
    font-weight: bold;
    margin-bottom: 10px;
}
</style>