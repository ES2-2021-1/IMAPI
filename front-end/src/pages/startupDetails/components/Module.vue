<template>
    <div class="accordion-item">
        <h2 id="collapse" v-b-toggle="'collapse-module'+module.id" variant="primary" role="tab"><button class="accordion-button collapsed">{{ module.title }}</button></h2>
        <b-collapse :id="'collapse-module'+module.id" class="mt-2">
            <Step v-for="step in steps" :key="step.id" :step="step"/>
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
        module: null,
        steps: null
    },
}
</script>

<style>

</style>