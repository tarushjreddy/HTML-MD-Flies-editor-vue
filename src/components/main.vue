<template>
 <h6>Mark Down Editor</h6>
 <section class="orient">
     <div class="editor_left">
         Marked/Html
         <!-- <textarea class="arear" v-model="text" ></textarea> -->
         <textarea class="arear" :value="text" @input="update" ></textarea>
     </div>
     <div class="editor_right">
          Result
    <article class="arear" v-html="markedText" ></article>
     </div>
 </section>
</template>

<script>

import marked from "marked";
export default {

  data(){
    return{
      text:"",
    }
  },
  methods:{
      update(e){
          this.text = e.target.value;
      }

  },
  computed:{
      markedText(){
          return  marked(this.text);
         
      }
  }
}
</script>

<style>
article{
    display: flex;
}
.editor_left{

    height: 100vh;
    width: 100vh;
    margin-right: 10px;
 


}
textarea{
    outline: none;
    padding: 20px;
     height: 100%;
     margin-left: 10px;
    max-width: 45vw;
    margin-top: 0px;
  
}
.arear{
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
            border: 1px solid black;
}
.editor_right{
    
      height: 100vh;
      margin-left: 10px;
    width: 45vw;


padding: 0px !important;


}
.orient{

   
}
</style>
