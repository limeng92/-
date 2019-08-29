import layout from '@/views/layout/Layout'

const tableRouter = {
  path: '/system',
  component: layout,
  redirect: '/system',
  name: 'system',
  meta: {
    title: '系统管理',
    icon: 'fullscreen'
  },
  children: [
    { path: 'system-auth', component: () => import('@/views/system/auth/list'), name: 'auth', meta: { title: '权限管理' }},
    { path: 'system-role', component: () => import('@/views/system/role/list'), name: 'role', meta: { title: '角色管理' }},
    { path: 'system-admins', component: () => import('@/views/system/admin/list'), name: 'admin', meta: { title: '管理员管理' }}
  ]
}
export default tableRouter
