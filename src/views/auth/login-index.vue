<template>
 <div class="login-form-wrapper">
   <Form  class="login">
     <Input required v-model="email" type="email" placeholder="Email" @on-keyup.enter="login"/>
     <Input required v-model="password" type="password" placeholder="Password" @on-keyup.enter="login"/>
     <Button  @click="login">Login</button>
   </Form>
 </div>
</template>
<script>
import { Form, Input, Button } from 'view-design'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    Form,
    Input,
    Button
  },
  methods: {
    async login() {
      const { email, password } = this
      await this.$store.dispatch('authStore/authRequest', { email, password })
      this.$router.push('/dashboard')
    }
  }
}
</script>
<style lang="sass">
  .login-form-wrapper
    display: flex
    position: absolute
    place-items: center
    background: white
    padding: 3rem
    height: 28rem
    width: 45rem
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    box-shadow: 0px 0px 6px 0px rgba(207, 207, 207, 75%)
    border-radius: 10px
    .ivu-input
      margin-bottom: 2rem
</style>