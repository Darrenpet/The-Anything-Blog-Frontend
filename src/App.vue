<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/GamingBlogs">Gaming</router-link> |
    <router-link to="/LifestyleBlogs">Lifestyle</router-link> |
    <router-link to="/MusicBlogs">Music</router-link> |
    <router-link to="/TechBlogs">Tech</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
