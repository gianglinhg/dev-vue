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
        path: 'users/create',
        name: 'admin-user-create',
        component: () => import('../pages/admin/user/create.vue')
      },
      {
        path: 'users/:id/edit',
        name: 'admin-user-edit',
        component: () => import('../pages/admin/user/edit.vue')
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
