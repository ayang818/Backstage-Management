<template>
    <div>
        <el-table :data="articlesData">
        <el-table-column prop="title" label="标题" width="140">
        </el-table-column>
        <el-table-column prop="body" label="内容" width="220">
        </el-table-column>
        <el-table-column prop="type" label="类别" width="80">
        </el-table-column>
        </el-table>
    </div>
</template>

<script>
  export default {
    data() {
      return {
       articlesData: []
      }
    },
    created(){
        this.$http.get("article").then(res => {
            this.articlesData = res.data
            console.log(res.data+"hello")
        })
    }
  };
</script>
