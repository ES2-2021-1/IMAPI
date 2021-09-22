<template>
    <b-container class="mb-5">
        <b-row>
            <div class="col justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center" >
                <div class="card">
                    <div class="card-body d-flex d-xl-flex d-xxl-flex flex-column align-items-center justify-content-xl-center align-items-xl-center" style="color: rgb(255,255,255);background: #1a1a1a;"><img class="d-flex" :src="require('@/assets/img/logo sample.png')" style="height: 100px;">
                        <h4 class="card-title">{{ startup.name }}</h4>
                        <p class="card-text">{{ startup.description }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <b-progress :value="startup.currentStepId" :max="nSteps" height="10px" animated variant="success"></b-progress>
                <div class="accordion" role="tablist" id="accordion-1">
                    <Module v-for="module in modules" :key="module.id" :module="module" :steps="steps"/>
                </div>
            </div>
        </b-row>
    </b-container>
</template>

<script>
import Module from "./components/Module.vue";

export default {
	name: 'StartupDetails',
	components: {
        Module
	},
    data() {
        return {
            modules: [],
            startup: [],
            steps: [],
            id: 2,
            nSteps: 0,
        }
    },
    methods: {
        async fetchModules() {
            let { data } = await window.axios.get(`http://localhost:8082/api/module/`);
            this.modules = data;
        },
        async fetchStartup() {
            let { data } = await window.axios.get(`http://localhost:8082/api/startup/`+this.id);
            this.startup = data[0];
        },
        async fetchSteps() {
            let { data } = await window.axios.get(`http://localhost:8082/api/step/`);
            this.steps = data;
            this.nSteps = data.length;
        },
    },
    created() {
        this.fetchSteps();
        this.fetchStartup();
        this.fetchModules();
    },
    mounted() {
        console.log(this.startup);
        console.log(this.nSteps);
    }
}
</script>

<style>

</style>