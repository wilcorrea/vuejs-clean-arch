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
        .on('/', () => import('presentation/views/welcome/Home.vue'))
        .setName('home.index')
      router
        .on('/about', () => import('presentation/views/welcome/About.vue'))
        .setName('home.about')
      router
        .on('/sign-in', () => import('presentation/views/welcome/SignIn.vue'))
        .setName('home.sign-in')
    })
}
