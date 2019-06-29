<template>
    <div>
        <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
        </el-table>
    </div>
</template>

<script>
  export default {
    data() {
      const item = {
        date: '2018-8-18',
        name: '杨丰畅',
        address: '杭州电子科技大学'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
