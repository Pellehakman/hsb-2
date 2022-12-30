<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

</script>

<template>


    <div class="wrapper">
    

      <nav>
        <RouterLink to="/">Login</RouterLink>
        <RouterLink to="/Home">Home</RouterLink>
      </nav>
    </div>


  <RouterView />
</template>
