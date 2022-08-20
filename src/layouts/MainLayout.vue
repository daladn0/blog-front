<template>
  <div>
    <header>
      <router-link :to="{ name: 'login' }">Login</router-link>
    </header>
    <slot />
  </div>
</template>
<script>
export default {
  name: "MainLayout",
};
</script>
