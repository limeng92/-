<template>
  <div class="dashboard-container">
    少儿英语后台管理系统
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }
  }
}
</script>
<style>
.dashboard-container{
  font-size: 2rem;
  text-align: center;
  padding-top: 10rem;
}
</style>

