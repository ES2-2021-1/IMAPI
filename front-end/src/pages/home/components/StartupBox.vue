<template>
    <div class="col d-flex d-sm-flex d-md-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center">
        <div class="card" style="padding: 0;margin: 25px;max-width: 300px;box-shadow: 0px 0px;">
            <div class="card-body d-flex flex-column align-items-center align-items-sm-center" style="background: #1a1a1a;box-shadow: 1px 1px 3px var(--bs-dark);border-radius: 4px;min-width: 260px;">
                <div class="text-right w-100">
                    <p v-if="status == true"><b-badge variant="success">Ativa</b-badge></p>
                    <p v-else><b-badge variant="danger">Inativa</b-badge></p>
                </div>
                <img :src="img" style="margin: 20px;height: 100px;">
                <h4 class="card-title" style="color: var(--bs-white);margin: 25px;">{{ title }}</h4>
                <p class="card-text" style="color: var(--bs-white);width: 250px;">{{ description }}</p>
                <router-link :to="'/startup/'+id" >
                    <button class="btn btn-primary d-xxl-flex justify-content-xxl-center" style="color: var(--bs-white);background: var(--bs-success);width: 250px;margin-top: 10px;margin-bottom: 10px;">Acessar</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StartupBox',
    components: {
    },
    props:{
        img: String,
        title: String,
        description: String,
        status: null,
        id: Number
    },
}
</script>
