<template>
    <div>
        <el-table :data="articlesData">
        <el-table-column prop="title" label="标题" width="140">
        </el-table-column>
        <el-table-column prop="body" label="内容" width="220">
        </el-table-column>
        <el-table-column prop="type" label="类别" width="80">
        </el-table-column>
         <el-table-column
            fixed="left"
            label="操作"
            width="100">
            <template slot-scope="scope">
            <el-button @click="modify(scope.row._id)" type="text" size="small">编辑</el-button>
            <el-button @click="remove(scope.row._id)" type="text" size="small">删除</el-button>
            </template>
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
    methods: {
        fetch() {
            this.$http.get("article").then(res => {
                this.articlesData = res.data
                console.log(res.data+"hello")
            })
        },
        modify(id){
            this.$router.push(`/article/modify/${id}`)
        },
        remove(id){
            this.$http.delete(`/article/${id}`).then(res => {
                this.$message({
                message: '文章删除成功',
                type: 'success'
                });
                this.fetch()
            })
        },
    },

    created(){
            this.$http.get("article").then(res => {
                this.articlesData = res.data
            })
        },
  };
</script>
