<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <component-aside></component-aside>
    </el-aside>
    <el-container>
      <el-header>
        <component-header></component-header>
      </el-header>
      <common-tag></common-tag>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import ComponentAside from '@/components/componentAside.vue'
import ComponentHeader from '@/components/componentHeader.vue'
import CommonTag from '@/components/commonTag.vue'

export default {
  name: 'Home',
  components: {
    ComponentAside,
    ComponentHeader,
    CommonTag
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
