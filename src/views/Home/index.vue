<template>
  <el-row class="home" :gutter="20">
    <!-- 首页左布局 -->
    <el-col :span="8" style="margin-top: 20px">
      <!-- 首页超级管理员布局 -->
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg" />
          <div class="userinfo">
            <p class="name">admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2021-2-19</span></p>
          <p>上次登录地点：<span>武汉</span></p>
        </div>
      </el-card>

      <!-- 组件购买统计 -->
      <el-card style="margin-top: 20px; height: 400px">
        <el-table :data="tableData">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          ></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <!-- 首页右布局 -->
    <el-col :span="16" style="margin-top: 20px">
      <!-- 组件订单展示 -->
      <div class="num">
        <el-card
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: 0 }"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="num">￥{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height: 200px"></el-card>
      <div class="graph">
        <el-card style="height: 260px"></el-card>
        <el-card style="height: 260px"></el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getMenu } from '../../api/data.js'
export default {
  name: 'Home',
  data() {
    return {
      // 表格数据
      tableData: [
        {
          name: 'oppo',
          todaybuy: 100,
          monthbuy: 300,
          totalbuy: 800
        },
        {
          name: 'vivo',
          todaybuy: 100,
          monthbuy: 300,
          totalbuy: 800
        },
        {
          name: '苹果',
          todaybuy: 100,
          monthbuy: 300,
          totalbuy: 800
        },
        {
          name: '三星',
          todaybuy: 100,
          monthbuy: 300,
          totalbuy: 800
        },
        {
          name: '魅族',
          todaybuy: 100,
          monthbuy: 300,
          totalbuy: 800
        },
        {
          name: 'oppo',
          todaybuy: 100,
          monthbuy: 300,
          totalbuy: 800
        }
      ],
      tableLabel: {
        name: '手机',
        todaybuy: '今日购买',
        monthbuy: '本月购买',
        totalbuy: '总购买'
      },
      // 数据显示
      countData: [
        {
          name: '今日支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '今日收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '今日未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef'
        },
        {
          name: '本月支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '本月收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '本月未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef'
        }
      ],
      userImg: require('@/assets/images/user.png')
    }
  },
  mounted() {
    getMenu().then((res) => {
      console.log(res)
    })
  }
}
</script>

<style></style>
