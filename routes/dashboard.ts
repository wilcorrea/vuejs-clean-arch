import RouteManager from 'app/kernel/Routing/RouteManager'

/**
 * @param {RouteManager} router
 */
export default function (router: RouteManager): void {
  router
    .route('/dashboard', () => import('presentation/modules/Dashboard/DashboardLayout.vue'))
    .setName('dashboard')
    .addChildren(function (router: RouteManager) {
      router.on('', () => import('presentation/views/dashboard/category/CategoryForm.vue'))
    })
}
