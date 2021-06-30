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