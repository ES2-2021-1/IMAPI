<template>
    <b-card>
        <h2 v-b-toggle="'collapse-step'+step.id" class="accordion-header" role="tab"><button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-1" aria-expanded="true" aria-controls="accordion-1 .item-1">{{step.title}}</button></h2>
        <b-collapse :id="'collapse-step'+step.id" class="mt-2">
            <div class="py-3">
                <p class="mb-0 text-center"><b>Resumo:</b> {{step.summary}}</p>
            </div>
            <b-card class="p-2">
                <h4 class="text-center">Conteúdo</h4>
                <p class="py-2">{{step.content}}</p>

                <div v-if="task">
                    <Task :task="task"/>
                </div>
            </b-card>
            
        </b-collapse>
    </b-card>
</template>

<script>
import Task from "./Task.vue";

export default {
	name: 'Step',
    components: {
        Task
	},
    props: {
        step: null,
    },
    data() {
        return {
            task : null
        }
    },
    methods: {
        async fetchTask() {
            let { data } = await window.axios.get(`/api/task/`, {headers: { Authorization: `Bearer ${this.$session.get("token")}`}});
            for(let task in data){
                if(data[task].stepId == this.step.id){
                    this.task = data[task];
                }
            }
        },
    },
    created() {
        this.fetchTask();
    },
}
</script>