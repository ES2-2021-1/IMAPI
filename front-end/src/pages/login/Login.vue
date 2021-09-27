<template>
  <div class="py-5 my-4 form-login">
        <section class="d-flex justify-content-center login-dark">
            <form class="text-center mt-5 p-3" method="post" @submit.prevent="login">
                <div class="illustration"><img :src="require('@/assets/img/Logo_TIPO BRANCO.png')" style="width: 100%;"></div>

                <small class="text-danger">{{ invalidLogin }}</small>
                <div class="mb-3"><input v-model="email" class="form-control" type="email" name="email" placeholder="Email" autocomplete="off"></div>
                <small class="text-danger">{{ emailError }}</small>

                <div class="mb-3"><input v-model="password" class="form-control" type="password" name="password" placeholder="Senha" autocomplete="off"></div>
                <small class="text-danger">{{ passwordError }}</small>

                <div class="mb-3"> <a href="#" class="mt-3">Esqueci minha senha</a></div>

                <div class="mb-3"><button class="btn btn-primary d-block w-100" type="submit" style="background: var(--bs-success);">Login</button></div>

            </form>
        </section>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
      invalidLogin: ''
    }
  },
  beforeCreate() {
      if(this.$session.exists())
          this.$router.push({ name: 'home' });
  },
  methods: {
    async login() {
			this.emailError = '';
      this.passwordError = '';
      this.invalidLogin = '';

			const bodyParameters = {
				email: this.email,
				password: this.password,
			};

			window.axios.post( 
				'api/auth',
				bodyParameters
				).then((response)=> {
          this.$session.set('jwt', response.data.token);
          this.$session.set('userId', response.data.userId);
          window.axios.defaults.headers.common['Access-Control-Allow-Headers'] = true;
          window.axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
					this.$router.push({ name: 'home' });
          console.log(window.axios.defaults.headers);
          document.location.reload();
				}).catch( err => {
          if (err.response.data.errors) {
            if(err.response.data.errors.email){
              this.emailError = err.response.data.errors.email[0];
            }
            if(err.response.data.errors.password){
              this.passwordError = err.response.data.errors.password[0];
            }
          }
          if(err.response.data.error){
						this.invalidLogin = err.response.data.error;
          }
				});
		}
  }
}
</script>

<style>
  
</style>