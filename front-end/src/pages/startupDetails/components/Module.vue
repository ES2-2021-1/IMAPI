<template>
    <div class="accordion-item">
        <h2 v-b-toggle="'collapse-'+module.id" variant="primary" class="accordion-header" role="tab"><button class="accordion-button collapsed">{{ module.title }}</button></h2>
        <b-collapse :id="'collapse-'+module.id" class="mt-2">
            <Step/>
        </b-collapse>
    </div>
</template>

<script>
import Step from "./Step.vue";

export default {
	name: 'Module',
	components: {
        Step
	},
    props: {
        module
    },
    data() {
        return {
            steps: [],
        }
    },
    methods: {
        async fetchSteps() {
            let { data } = await window.axios.get(`http://localhost:8082/api/step/`);
            data.foreach((step) => {
                if(step.moduleId == this.module.id){
                    this.steps.push(step);
                }
            })
        },
    },
    created() {
        this.fetchSteps();
    },
}
</script>

<style>

</style>