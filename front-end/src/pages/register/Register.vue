
<template>
	<div class="form-login">
		<section class="login-dark">
		<form @submit.prevent="login">
			<h2 class="visually-hidden">Login Form</h2>
			<div class="illustration"><img :src="require('@/assets/img/Logo_TIPO BRANCO.png')" style="width: 100%;" required></div>
			<div class="mb-3"><input v-model="name" class="form-control" type="text" name="name" placeholder="Nome" autocomplete="off" required></div>
			<div class="mb-3"><input v-model="email" class="form-control" type="text" name="email" placeholder="Email" autocomplete="off" required></div>
			<div class="mb-3"><input v-model="cpf"   class="form-control" type="text" name="cpf" placeholder="Cpf" autocomplete="off" required></div>
			<div class="mb-3"><input v-model="phone"  class="form-control" type="text" name="phone" placeholder="Telefone" autocomplete="off" required></div>
			<div class="mb-3"><input v-model="password" maxlength="32" class="form-control" type="password" name="password" placeholder="Senha" autocomplete="off" required></div>
			<div class="mb-3"><input v-model="password_confirmation" maxlength="32" class="form-control" type="password" name="password_confirmation" placeholder="Confirmar Senha" autocomplete="off" required></div>
			<div class="mb-3"><button class="btn btn-primary d-block w-100" type="submit" style="background: var(--bs-success);">Cadastro</button></div>
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
				password: '',
				password_confirmation: '',
				phone: '',
				cpf: '',
				role: '0'
			}
		},
		methods: {
			async login() {
				console.log(this.name);
				console.log(this.email);
				console.log(this.password);
				console.log(this.cpf);
				console.log(this.phone);
				console.log(this.password);
				console.log(this.password_confirmation);


				// const bodyParameters = {
				// 	name: this.name,
				// 	email: this.email,
				// 	password: this.password,
				// 	password_confirmation: this.password_confirmation,
				// 	phone: this.phone,
				// 	cpf: this.cpf,
				// 	role: this.role,
				// };

				// window.axios.post( 
				// 	'http://localhost:8082/api/user',
				// 	bodyParameters,
				// ).then( res => {
				// 	console.log('then')
				// 	console.log(res)
				// }).catch(res => {
				// 	console.log('catch')
				// 	console.log(res)
				// });
				const name = this.name;
				const email = this.email;
				const password = this.password;
				const password_confirmation = this.password_confirmation;
				const phone = this.phone;
				const cpf = this.cpf;
				const role = this.role;
				
				const res = await fetch(
					"http://localhost:8082/api/user",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							name,
							email,
							password,
							password_confirmation,
							phone,
							cpf,
							role
						})
					}
				);
				const data = await res.json();
				console.log(data);
			}
	}
}
</script>

<style>

</style>