import Router from 'app/core/Router'

/**
 * @param {Router} router
 */
export default function (router: Router): void {
  router
    .route('/', () => import('presentation/modules/Welcome/HomeLayout.vue'))
    .setName('home')
    .addChildren(function (router: Router) {
      router
        .on('/', () => import('presentation/views/Home.vue'))
        .setName('home.index')
      router
        .on('/about', () => import('presentation/views/About.vue'))
        .setName('home.about')
    })
}
