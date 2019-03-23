/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const tableRouter = {
  path: '/example',
  component: Layout,
  redirect: '/example',
  name: 'Example',
  meta: {
    title: '例子',
    icon: 'table'
  },
  children: [
    {
      path: 'example-table1',
      component: () => import('@/views/example/list'),
      name: 'exampleTable1',
      meta: { title: '表格示例1' }
    }
  ]
}
export default tableRouter
