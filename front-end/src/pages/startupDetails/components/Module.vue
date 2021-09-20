<template>
    <div class="accordion-item">
        <h2 v-b-toggle.collapse-1 variant="primary" class="accordion-header" role="tab"><button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-1" aria-expanded="true" aria-controls="accordion-1 .item-1">Etapa 1</button></h2>
        <b-collapse id="collapse-1" class="mt-2">
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
}
</script>

<style>

</style>