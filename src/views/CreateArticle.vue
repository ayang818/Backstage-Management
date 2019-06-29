<template>
    <el-form @submit.native.prevent ref="form" :model="article" label-width="80px">
  <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
  </el-form-item>
  <el-form-item label="文章内容" >
    <el-input type="textarea" v-model="article.body"></el-input>
  </el-form-item>
    <el-form-item label="文章类别">
    <el-radio-group v-model="article.type">
      <el-radio label="随笔"></el-radio>
      <el-radio label="前端"></el-radio>
      <el-radio label="后端"></el-radio>
      <el-radio label="基础知识"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" native-type="submit" @click="saveArticle">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</template>

<script>
  export default {
    data() {
      return {
        article: {
            
        }
      }
    },
    methods: {
      saveArticle() {
        // 方便的双向绑定
        console.log(this.article);
      }
    }
  }
</script>
