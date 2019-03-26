<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-add" @click="handleCreate">新建</el-button>
    </div>
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">

      <el-table-column align="center" label="姓名">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="年龄">
        <template slot-scope="scope">
          <span>{{ scope.row.age }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="公司">
        <template slot-scope="scope">
          <span>{{ scope.row.company }}</span>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" align="center" label="身高">
        <template slot-scope="scope">
          <span>{{ scope.row.height }}<span/>
        </span></template>
      </el-table-column>

      <el-table-column align="center" label="体重">
        <template slot-scope="scope">
          <span>{{ scope.row.weight }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="操作" width="240">
        <template slot-scope="scope">
          <el-button type="primary" size="small" icon="el-icon-edit" @click="editRow(scope.row.id)">修改</el-button>
          <el-button type="warning" size="small" icon="el-icon-delete" @click="deleteRow(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>

    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

    <el-dialog
      :visible.sync="dialogVisible"
      :title="isEdit?'查看':'创建'"
      width="50%">
      <detail-form ref="detailForm" :post-form="postForm" :is-edit="isEdit" @closeFun="closeFun"/>
    </el-dialog>
  </div>
</template>

<script>
import { fetchList } from '@/api/example'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
import detailForm from './detailForm'
import { fetchExample, deleteExample } from '@/api/example'

export default {
  name: 'ArticleList',
  components: { Pagination, detailForm },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      dialogVisible: false,
      isEdit: false,
      postForm: {},
      listQuery: {
        page: 1,
        limit: 8
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.data
        this.total = response.data.total
        this.listLoading = false
      })
    },
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
    },
    async editRow(id) {
      this.isEdit = true
      await this.fetchData(id)
      this.dialogVisible = true
    },
    deleteRow(id) {
      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteExample(id).then(response => {
          this.$notify({
            title: '删除成功',
            message: this.massage,
            type: 'success',
            duration: 2000
          })
          this.getList()
        }).catch(err => {
          console.log(err)
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    handleCreate() {
      this.isEdit = false
      this.id = ''
      this.postForm = {}
      this.dialogVisible = true
    },
    closeFun(result) {
      this.dialogVisible = false
      this.getList()
    },
    fetchData(id) {
      fetchExample(id).then(response => {
        this.postForm = response.data
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
