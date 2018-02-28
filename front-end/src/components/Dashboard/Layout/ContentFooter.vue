<template>
  <footer class="footer">
    <div class="container-fluid">
      <nav class="pull-left">
        <ul>
          <li>
            <router-link :to="{path:'/admin'}">Dashboard</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright pull-right">
      <i class="fa fa-registered registered"></i>
        &copy; Coded With
        <i class="fa fa-heartbeat heartbeat"></i> by BI 18
      </div>
    </div>
  </footer>
</template>
<script>
  export default {}

</script>
<style>

</style>
