<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/agb">AGB</router-link>
    <router-link to="/agbundlb">AGBundLB</router-link>
    <router-link to="/aagbundlb">150AGBundLB</router-link>
  </div>
</template>
<style lang="scss">
a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 20px;
  text-decoration: none;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>