<template>
  <div class="createPost-container">
    <el-form ref="postForm" :model="postForm" :rules="rules" label-position="left" class="form-container">
      <el-form-item label="权限名称" prop="auth_name">
        <el-input v-model="postForm.auth_name"/>
      </el-form-item>

      <el-form-item label="所属权限模块" prop="auth_pid"/>
      <template>
        <el-select v-model="postForm.auth_pid" class="filter-item create_select_css" placeholder="请选择" @change="changeAuth(this)">
          <el-option label="顶级权限" value="0" />
          <el-option v-for="v in list" :data-id="v.id" :data-name="v.auth_name" :key="v.value" :label="v.auth_name" :value="v.id" />
        </el-select>
      </template>

      <el-form-item label="顶级权限接口" prop="auth_c" >
        <el-input v-model="postForm.auth_c" :placeholder="postForm.auth_name" />
      </el-form-item>
      <el-form-item v-if="seen" label="子集权限接口" prop="auth_a">
        <el-input v-model="postForm.auth_a"/>
      </el-form-item>
      <el-form-item>
        <el-button :loading="loading" type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">取消</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>

import { updateAuth, createAuth, AuthAllList } from '@/api/auth'

const submitFun = { // 设定调用方法，如果为0就调用添加方法，为1就调用更新方法
  '0': createAuth,
  '1': updateAuth
}

export default {
  name: 'ArticleDetail',
  components: {},
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
    postForm: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      seen: true,
      loading: false,
      list: null,
      userListOptions: [],
      rules: {
        auth_name: [
          { required: true, message: '请输入权限名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        auth_pid: [
          { required: true, message: '请选择所属权限模块', trigger: 'blur' }
        ],
        auth_c: [
          { required: true, message: '请输入顶级权限接口', trigger: 'blur' },
          { min: 3, max: 30, message: '长度在 3 到 30 个字符', trigger: 'blur' }
        ],
        auth_a: [
          { required: true, message: '请输入子集权限接口', trigger: 'blur' },
          { min: 3, max: 30, message: '长度在 3 到 30 个字符', trigger: 'blur' }
        ]
      },
      tempRoute: {}
    }
  },
  computed: {
    massage() {
      return this.isEdit ? '修改成功！' : '创建成功！'
    }
  },
  created() { // 进入详情页面，就调用authall方法，查询所有权限数据
    this.authAll()
  },
  methods: {
    authAll() {
      this.listLoading = true
      AuthAllList(this.listQuery).then(response => {
        this.list = response.data.data
      })
    },
    submitForm() {
      console.log(this.postForm)
      this.$refs.postForm.validate(valid => {
        if (valid) {
          this.loading = true
          submitFun[Number(this.isEdit)](this.postForm).then(response => {
            this.$notify({
              title: '成功',
              message: this.massage,
              type: 'success',
              duration: 2000
            })
            this.loading = false
            this.$refs['postForm'].resetFields()
            this.$emit('closeFun', response)
          }).catch(err => {
            this.loading = false
            console.log(err)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm() {
      this.$refs['postForm'].resetFields()
    },
    changeAuth(obj) {
      console.log(obj)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/mixin.scss";
.createPost-container {
  position: relative;
  .createPost-main-container {
    padding: 40px 45px 20px 50px;
    .postInfo-container {
      position: relative;
      @include clearfix;
      margin-bottom: 10px;
      .postInfo-container-item {
        float: left;
      }
    }
  }
  .word-counter {
    width: 40px;
    position: absolute;
    right: -10px;
    top: 0px;
  }
  .create_select_css{
    width: 920px;
  }
}
</style>
