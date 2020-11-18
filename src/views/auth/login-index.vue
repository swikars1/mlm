<template>
 <div>
   <Form class="login" >
     <h1>Sign in</h1>
     <Input required v-model="email" type="email" placeholder="Snoopy"/>
     <Input required v-model="password" type="password" placeholder="Password"/>
     <hr/>
     <Button @click="login">Login</button>
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