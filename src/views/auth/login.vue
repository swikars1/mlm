<template>
 <div>
   <Form class="login" >
     <h1>Sign in</h1>
     <Input required v-model="username" type="text" placeholder="Snoopy"/>
     <Input required v-model="password" type="password" placeholder="Password"/>
     <hr/>
     <Button @click="login">Login</button>
   </Form>
 </div>
</template>
<script>
import { Form, Input, Button } from 'view-design'

export default {
  components: {
    Form,
    Input,
    Button
  },
  methods: {
    login() {
      debugger
      this.$router.push('/')
    }
  }
}
</script>