<template>
    <div>
        一个页面
    </div>
    <!--使用组件-->
    {{msg}}
    <New></New>
</template>

<script>
//引入组件
import New from '@/components/NewComponent.vue'

//引入方法
import {getFunction} from '@/api/NewApi.js'

export default {
    name:"newView",
    //所有要用到的数据写在这里
    data(){
        return {
            msg:null
        }
    },
    //所有方法写在这里
    methods:{

    },
    //注册的组件，注册后就可以使用了
    components:{
       New
    },

    //挂载的方法，每次页面刷新会自动执行
    mounted(){
        getFunction().then(res =>{
            this.msg=res
        })
    }
}

</script>
