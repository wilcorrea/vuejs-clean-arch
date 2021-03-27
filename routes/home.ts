import Router from 'app/core/Router'

/**
 * @param {Router} router
 */
export default function (router: Router): void {
  router
    .route('/', () => import('presentation/modules/Welcome/WelcomeLayout.vue'))
    .setName('home')
    .addChildren(function (router: Router) {
      router
        .on('/', () => import('presentation/views/Welcome/Home.vue'))
        .setName('home.index')
      router
        .on('/about', () => import('presentation/views/Welcome/About.vue'))
        .setName('home.about')
      router
        .on('/sign-in', () => import('presentation/views/Welcome/SignIn.vue'))
        .setName('home.sign-in')
    })
}
