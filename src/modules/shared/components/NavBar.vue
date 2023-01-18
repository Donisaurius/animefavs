<template>
  <div>
    <nav class="navbar">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  display: flex;
  justify-content: center;
}

.navbar > li {
  list-style: none;
  margin-right: 5px;
  font-weight: bold;
}

.router-link-exact-active {
  color: rgb(31, 179, 127);
}
</style>
