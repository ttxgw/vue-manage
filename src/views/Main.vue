<template>
  <el-container>
    <el-aside width="auto">
      <component-aside></component-aside>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import ComponentAside from '@/components/componentAside.vue'
export default {
  name: 'Home',
  components: {
    ComponentAside
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: #333;
}

.el-main {
  padding-top: 0;
}
</style>
