import Router from 'app/core/Router'

/**
 * @param {Router} router
 */
export default function (router: Router): void {
  router
    .route('/dashboard', () => import('presentation/modules/Dashboard/DashboardLayout.vue'))
    .setName('dashboard')
    .addChildren(function (router: Router) {
      router.on('', () => import('presentation/views/Dashboard/CategoryForm.vue'))
    })
}
