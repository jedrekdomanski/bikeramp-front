<template>
  <div>
    <h1>Uh-oh!</h1>
    <h3>It looks like you're experiencing some network issues, please click the back button and try again.</h3>
    <router-link :to="{ name: 'home' }">Or go back to the home page</router-link>
  </div>
</template>