<template>
  <div class="hello">
    <el-menu theme="dark" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">Boostfield</el-menu-item>
    </el-menu>
    <div class="left-panel">
      <el-menu mode="vertical" :default-active="activeIndex" class="el-menu-vertical-demo" :router="true">
        <el-menu-item-group title="漳州麻将">
          <el-menu-item index="/admin/zzmj/api"><i class="el-icon-message"></i>API</el-menu-item>
          <el-menu-item index="2"><i class="el-icon-setting"></i>其他</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="牛牛">
          <el-menu-item index="3"><i class="el-icon-message"></i>API</el-menu-item>
          <el-menu-item index="4"><i class="el-icon-setting"></i>其他</el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </div>
    <div class="right-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      activeIndex: '/admin/zzmj/api'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" rel="stylesheet/less">
  .left-panel {
    width: 150px;
    float: left;
  }
  .right-content {
    //width: 100% - 150px;
    position: absolute;
    left: 150px;
    padding: 10px;
    right: 0;
    top: 60px;
    bottom: 0;
  }
</style>
