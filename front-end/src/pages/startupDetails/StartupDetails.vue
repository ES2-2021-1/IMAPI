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
                    <Module v-for="module in modules" :key="module.id" :module="module" :steps="steps[module.id]"/>
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
    props: {
        id : null,
    },
    data() {
        return {
            modules: [],
            startup: "",
            steps: {},
            nSteps: 0,
        }
    },
    methods: {
        async fetchModules() {
            let { data } = await window.axios.get(`/api/module/`, {headers: { Authorization: `Bearer ${this.$session.get("jwt")}`}});
            this.modules = data;
        },
        async fetchStartup() {
            let { data } = await window.axios.get(`/api/startup/`+this.id, {headers: { Authorization: `Bearer ${this.$session.get("jwt")}`}});
            this.startup = data[0];
            if(!this.startup || this.startup.ownerId != this.$session.get('user_id')){
                this.$router.push({ name: 'error' });
            }
        },
        async fetchSteps() {
            let { data } = await window.axios.get(`/api/step/`, {headers: { Authorization: `Bearer ${this.$session.get("jwt")}`}});
            this.nSteps = data.length;
            for await(let step of data){
                if(this.steps[step.moduleId]){
                    this.steps[step.moduleId].push(step);
                } else {
                    this.steps[step.moduleId] = new Array();
                    this.steps[step.moduleId].push(step);
                }
            }
        },
    },
    created() {
        this.$session.set('user_id', 1);
        this.fetchSteps();
        this.fetchStartup();
        this.fetchModules();
    },
}
</script>

<style>

</style>