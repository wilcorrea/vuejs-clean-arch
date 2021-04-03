import RouteManager from 'app/kernel/Routing/RouteManager'

/**
 * @param {RouteManager} router
 */
export default function (router: RouteManager): void {
  router
    .route('/', () => import('presentation/modules/Welcome/WelcomeLayout.vue'))
    .setName('home')
    .addChildren(function (router: RouteManager) {
      router
        .on('/', () => import('presentation/modules/Welcome/views/Home.vue'))
        .setName('home.index')
      router
        .on('/about', () => import('presentation/modules/Welcome/views/About.vue'))
        .setName('home.about')
      router
        .on('/sign-in', () => import('presentation/modules/Welcome/views/SignIn.vue'))
        .setName('home.sign-in')
    })
}
