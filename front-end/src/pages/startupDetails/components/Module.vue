<template>
    <div class="accordion-item">
        <h2 id="collapse" v-b-toggle="'collapse-module'+module.id" variant="primary" role="tab"><button class="accordion-button collapsed">{{ module.title }}</button></h2>
        <b-collapse :id="'collapse-module'+module.id" class="mt-2">
            <Step v-for="step in validSteps" :key="step.id" :step="step"/>
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
        module,
        steps: Step
    },
    data() {
        return {
            validSteps: []
        }
    },
    methods: {
        async fetchSteps() {
            for(let step in this.steps){
                if(this.steps[step].moduleId == this.module.id){
                    this.validSteps.push(this.steps[step]);
                }
            }
        },
    },
    created() {
        this.fetchSteps();
    },
}
</script>

<style>

</style>