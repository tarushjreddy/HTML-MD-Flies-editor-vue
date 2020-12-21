<template>
  <div id="nav">
    <router-link  to="/">Home</router-link> |
    <router-link to="/about">Markdown Editor</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
body{
  margin: 0px;
}
#nav {
  padding: 30px;

  max-height: 20px;
  background-color: #42b983;

}


#nav a {
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
    color: white;
}

#nav a.router-link-exact-active {
  color: black;
}
</style>
