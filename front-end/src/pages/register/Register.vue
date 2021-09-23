<template>
	<div class="form-login py-5 my-4">
		<section class="login-dark d-flex justify-content-center login-dark">
		<form @submit.prevent="login">
			<h2 class="visually-hidden">Login Form</h2>
			<div class="illustration"><img :src="require('@/assets/img/Logo_TIPO BRANCO.png')" style="width: 100%;" required></div>

			<div class="mt-3"><input v-model="name" class="form-control" type="text" name="name" placeholder="Nome" autocomplete="off" required></div>
			<small class="text-danger">{{ nameError }}</small>
			
			<div class="mt-3"><input v-model="email"  class="form-control" type="email" name="email" placeholder="Email" autocomplete="off" required></div>
			<small class="text-danger">{{ emailError }}</small>
			
			<div class="mt-3"><input v-model="cpf" v-mask="'###.###.###-##'"  class="form-control" type="text" name="cpf" placeholder="Cpf" autocomplete="off" required></div>
			<small class="text-danger">{{ cpfError }}</small>
			
			<div class="mt-3"><input v-model="phone" v-mask="'(##)#####-####'" class="form-control" type="text" name="phone" placeholder="Telefone" autocomplete="off" required></div>
			<small class="text-danger">{{ phoneError }}</small>
			
			<div class="mt-3"><input v-model="password" maxlength="30" class="form-control" type="password" name="password" placeholder="Senha" autocomplete="off" required></div>
			<small class="text-danger">{{ passwordError }}</small>
			
			<div class="mt-3"><input v-model="password_confirmation" maxlength="30" class="form-control" type="password" name="password_confirmation" placeholder="Confirmar Senha" autocomplete="off" required></div>
			<small class="text-danger">{{ password_confirmationError }}</small>

			<div class="mt-3"><button class="btn btn-primary d-block w-100" type="submit" style="background: var(--bs-success);">Cadastrar</button></div>
	</form>
	</section>
</div>
</template>

<script>
export default {
	name: 'Register',
	data () {
		return {
				name: '',
				email: '',
				cpf: '',
				phone: '',
				password: '',
				password_confirmation: '',
				role: '0',

				nameError: ' ',
				emailError: ' ',
				cpfError: ' ',
				phoneError: ' ',
				passwordError: ' ',
				password_confirmationError: ' ',
			}
	},
	methods: {
		async login() {
			this.nameError = '';
			this.emailError = '';
			this.cpfError = '';
			this.phoneError = '';
			this.passwordError = '';
			this.password_confirmationError = '';

			let newCpf = this.cpf.replaceAll(".", "");
			newCpf = newCpf.replaceAll("-", "");


			const bodyParameters = {
				name: this.name,
				email: this.email,
				cpf: newCpf,
				phone: this.phone,
				password: this.password,
				password_confirmation: this.password_confirmation,
				role: this.role,
			};

			window.axios.post( 
				'api/user',
				bodyParameters
				).then(()=> {
					console.log("User Created")
					this.$router.push({ name: 'login' })
				}).catch( err => {
					if(err.response.data.errors.name){
						this.nameError = err.response.data.errors.name[0];
					}
					if(err.response.data.errors.email){
						this.emailError = err.response.data.errors.email[0];
					}
					if(err.response.data.errors.cpf){
						this.cpfError = err.response.data.errors.cpf[0];
					}
					if(err.response.data.errors.phone){
						this.phoneError = err.response.data.errors.phone[0];
					}
					if(err.response.data.errors.password){
						this.passwordError = err.response.data.errors.password[0];
					}
					if(err.response.data.errors.password_confirmation){
						this.password_confirmationError = err.response.data.errors.password_confirmation[0];
					}
				});
		}
	}
}
</script>

<style>

</style>