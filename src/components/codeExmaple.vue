<template>
   <div class="code-view-container">
        <div class="block-title">{{title}}</div>
        <codemirror
            ref="mycode"
            :value="curCode"
            :options="cmOptions"
            class="code">
        </codemirror>
    </div>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import "codemirror/theme/rubyblue.css";  // 这里引入的是主题样式，根据设置的theme的主题引入，一定要引入！！
import 'codemirror/lib/codemirror.css';
require("codemirror/mode/javascript/javascript"); // 这里引入的模式的js，根据设置的mode引入，一定要引入！！
// 引入keymap
import 'codemirror/addon/comment/comment'
import 'codemirror/keymap/sublime'
export default {
    name: "codeExmaple",
    data() {
        return {
            editor: null
        }
    },
    props:{
        title:{
            type: String,
            default: '这是标题'
        },
        curCode:{
            type: String,
            default: '这是显示代码的地方'
        },
        cmOptions:{
            type: Object,
            default:function(){
                return {
                    value:'',
                    mode:"text/javascript",
                    tabSize: 2, // Tab键空格数
                    theme: "rubyblue", // 主题
                    lineNumbers: true, //是否在编辑器左侧显示行号
                    readOnly:true,  //只读
                    lineNumbers:true, //是否显示行数
                };
			}
        }
    },
    mounted() {
    },
    components:{
        codemirror
    }
}
</script>

<style scoped lang="scss">
.block-title {
     font-family: 'zhiyongshoushu'; 
}
// 高度自适应
/deep/ .CodeMirror {
    border: 1px solid #eee;
    height: auto;
}

/deep/ .CodeMirror-scroll {
    height: auto;
    overflow-y: hidden;
    overflow-x: auto;
}
</style>