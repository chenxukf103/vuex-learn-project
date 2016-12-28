<template>
    <body>
        <header-component/>
          <div id="app">
              <p>{{count}}</p>
              <p>
                  <button @click="increment">+</button>
                  <button @click="decrement">-</button>
              </p>
          </div>
        <other-component/>
    </body>
</template>
<style scoped>
    body{
        background-color:#ff0000;
    }
</style>
<script>
    import HeaderComponent from './components/header.vue'
    import OtherComponent from './components/other.vue'
    export default{
        name:'app',
        <!--data(){
            return{
                msg:'hello vue'
            }
        },-->
        data:function() {
        return {
        count:0
        }
        },
        methods:{
        increment:function() {
        ++this.count;
        },
        decrement:function() {
        --this.count;
        }
        }
        components:{
            'other-component':OtherComponent,
            HeaderComponent,//简写，HeaderComponent：HeaderComponent
        }
    }
</script>
