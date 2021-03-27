<template>
  <div id="WelcomeLayout">
    <div id="nav">
      <RouterLink to="/">
        <span>Home</span>
      </RouterLink>
      <span> | </span>
      <RouterLink to="/about">
        <span>About</span>
      </RouterLink>
      <span> | </span>
      <RouterLink to="/sign-in">
        <span>Sign In</span>
      </RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<script>
export default {
  name: 'WelcomeLayout'
}
</script>

<style
  lang="scss"
  scoped
>
#WelcomeLayout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
