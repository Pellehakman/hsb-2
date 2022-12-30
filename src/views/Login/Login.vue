<script src="./Login.ts" lang="ts"></script>

<template>
  <div>
    <form>
        <h1>This is login</h1>
        <input v-model="username" type="text" placeholder="username"/>
        <input v-model="password" type="password" placeholder="password"/>
        <input type="submit" @click.prevent="handleSubmit()"> 
    </form>
  </div>
</template>
