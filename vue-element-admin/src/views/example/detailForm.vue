<template>
  <div class="createPost-container">
    <el-form ref="postForm" :model="postForm" :rules="rules" label-position="left" class="form-container">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="postForm.name"/>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model="postForm.age"/>
      </el-form-item>
      <el-form-item label="公司" prop="company">
        <el-input v-model="postForm.company"/>
      </el-form-item>
      <el-form-item label="身高" prop="height">
        <el-input v-model="postForm.height"/>
      </el-form-item>
      <el-form-item label="体重" prop="weight">
        <el-input v-model="postForm.weight"/>
      </el-form-item>
      <el-form-item>
        <el-button :loading="loading" type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">取消</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import { updateExample, createExample } from '@/api/example'

const submitFun = {
  '0': createExample,
  '1': updateExample
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
      loading: false,
      userListOptions: [],
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        age: [
          { required: true, message: '请输入年龄', trigger: 'blur' }
        ],
        company: [
          { required: true, message: '请输入公司名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        height: [{ required: true, message: '请输入身高', trigger: 'blur' }],
        weight: [{ required: true, message: '请输入体重', trigger: 'blur' }]
      },
      tempRoute: {}
    }
  },
  computed: {
    massage() {
      return this.isEdit ? '修改成功！' : '创建成功！'
    }
  },
  methods: {
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
}
</style>
