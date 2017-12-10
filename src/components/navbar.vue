<template>
  <nav>
    <router-link to="/" class="brand-logo">Hue</router-link>
    <ul>
      <li>
        <router-link to="maps">Maps</router-link>
      </li>
      <li>
        <router-link to="todo">Todo</router-link>
      </li>
      <li>
        <router-link to="blog">Blog</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  height: 56px;
  background: wheat;
}
a {
  text-decoration: none;
  color: brown;
}
nav a.brand-logo {
  float: left;
  padding: 15px 1em;
  font-size: 1.3em;
  font-weight: 500;
}
nav ul {
  float: right;
}
nav ul li {
  display: inline;
}

nav ul li a {
  padding: 10px 2em;
}
</style>
