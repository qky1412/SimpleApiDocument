<template>
    <div>
      <el-row>
        <el-form :inline="true" :model="formLogin">
          <el-form-item label="邮箱">
            <el-input v-model="formLogin.email" placeholder="邮箱"></el-input>
          </el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
          <el-form-item label="H">
          <el-input v-model="userData.h">
          </el-input>
          </el-form-item>
          <el-form-item label="uId" >
            <el-input v-model="userData.uId">
            </el-input>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row>
        <el-table
          :data="apiList"
          style="" border>
          <el-table-column
            prop="mod"
            label="Mod"
            width="100"
            align="left">
          </el-table-column>
          <el-table-column
            prop="action"
            label="Action"
            width="100"
            align="left">
          </el-table-column>
          <el-table-column
            prop="do"
            label="Do"
            width="150"
            align="left">
          </el-table-column>
          <el-table-column
            prop="des"
            label="Desc"
            width="200"
            align="left">
          </el-table-column>
          <el-table-column
            prop="queryStr"
            label="QueryStr"
            align="left">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">执行</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
      <el-dialog
        title="Api返回结果"
        :visible.sync="dialogVisible"
        size="large"
        >
        <div><span>URL: </span> {{apiUrl}}</div>
        <div><span>返回: </span> {{apiData}}</div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">确定</el-button>
        </span>
      </el-dialog>
    </div>
</template>
<style>
</style>
<script>
    import Api from '../../api/ZZMJ'
    export default {
        data () {
            return {
              apiList: [],
              formLogin: {
              },
              userData: {
              },
              dialogVisible: false,
              apiData: null,
              apiUrl: ''
            }
        },
        mounted () {
          Api.apiList(response => {
            this.formatData(response.data)
          }, error => {
            console.log(error)
          })
        },
        methods: {
          formatData: function (data) {
            for (var v in data) {
              var object = {action: v}
              object = Object.assign(object, data[v])
              this.apiList.push(object)
            }
          },

          login: function () {
            Api.login({email: this.formLogin.email}, response => {
              console.log(response.data)
              this.userData = response.data.data
            }, error => {
              console.log(error)
            })
          },

          handleClick: function (row) {
            console.log(row.queryStr)
            var json = JSON.parse(row.queryStr.replace('?data=', ''))
            json.h = this.userData.h
            json.uId = this.userData.uId
            console.log(json)
            Api.doUrl(json, response => {
              console.log(response)
              this.apiUrl = response.request.responseURL
              this.apiData = JSON.stringify(response.data)
              this.dialogVisible = true
            }, error => {
              console.log(error)
            })
          }
        }
    }
</script>
