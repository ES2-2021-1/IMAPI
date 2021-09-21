<template>
    <b-card>
        <h2 v-b-toggle="'collapse-step'+step.id" variant="primary" class="accordion-header" role="tab"><button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-1" aria-expanded="true" aria-controls="accordion-1 .item-1">{{step.title}}</button></h2>
        <b-collapse :id="'collapse-step'+step.id" class="mt-2">
            <b-card>
                <p class="mb-0">{{step.summary}}</p>
                    <p class="text-center" style="margin: 15px;color: #9be268;">Tarefa concluída&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-check-lg">
                            <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"></path>
                        </svg></p>
            </b-card>
        </b-collapse>
    </b-card>
</template>

<script>
import Step from "./Step.vue";

export default {
	name: 'Step',
    props: {
        step: Step
    },
    data() {
        return {
        }
    },
    methods: {
        async fetchSteps() {
            
        },
    },
    created() {
        // this.fetchSteps();
    },
}
</script>