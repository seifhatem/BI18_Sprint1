<template>
  <div id="app">
   <router-view>
   <router-link :to="{ name: 'Register' }">Navigate to Register</router-link>
   </router-view>
  </div>
</template>

<script>
export default {
}
</script>
