<template>
  <router-view />
</template>

<script>
import axios from 'axios'
export default {
created() {
  axios.interceptors.response.use(undefined, function (err) {
    return new Promise(function (resolve, reject) {
      if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
      // if you ever get an unauthorized, logout the user
        this.$store.dispatch('authStore/authLogout')
      // you can also redirect to /login if needed !
      }
      throw err;
    });
  });
}
}
</script>