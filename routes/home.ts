import RouteManager from 'app/router/RouteManager'

/**
 * @param {RouteManager} router
 */
export default function (router: RouteManager): void {
  router
    .route('/', () => import('presentation/modules/Welcome/WelcomeLayout.vue'))
    .setName('home')
    .addChildren(function (router: RouteManager) {
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
