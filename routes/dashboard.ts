import Router from 'app/core/Router'

/**
 * @param {Router} router
 */
export default function (router: Router): void {
  router
    .route('/', () => import('presentation/modules/Dashboard/DashboardLayout.vue'))
    .setName('dashboard')
}
