const admin = [
  {
    path: '/admin',
    component: () => import('../layouts/admin.vue'),
    children: [
      {
        path: 'users',
        name: 'admin-users',
        component: () => import('../pages/admin/user/index.vue')
      },
      {
        path: 'roles',
        name: 'admin-roles',
        component: () => import('../pages/admin/role/index.vue')
      },
      {
        path: 'settings',
        name: 'admin-settings',
        component: () => import('../pages/admin/setting/index.vue')
      }
    ]
  }
]

export default admin
