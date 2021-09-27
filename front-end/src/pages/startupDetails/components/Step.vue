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

                <div v-if="stepAnnexes.length > 0">
                    <hr>
                    <b-list-group>
                        <b-list-group-item v-for="stepAnnex in stepAnnexes" :key="stepAnnex.id">{{stepAnnex.path}}</b-list-group-item>
                    </b-list-group>
                </div>

                <div v-if="task">
                    <Task :task="task" :startupId="startupId" :annexes="annexes"/>
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
        startupId: null,
    },
    data() {
        return {
            task : null,
            annexes: [],
            stepAnnexes: [],
        }
    },
    methods: {
        async fetchTask() {
            let { data } = await window.axios.get(`/api/task/`, {headers: { Authorization: `Bearer ${this.$session.get("jwt")}`}});
            for(let task in data){
                if(data[task].stepId == this.step.id){
                    this.task = data[task];
                }
            }
        },
        async fetchAnnexes() {
            let { data } = await window.axios.get(`/api/annex/`, {headers: { Authorization: `Bearer ${this.$session.get("jwt")}`}});
            this.annexes = data;
            for await(let annex of data){
                if(annex.stepId == this.step.id){
                    this.stepAnnexes.push(annex);
                }
            }
        },
    },
    created() {
        this.fetchTask();
        this.fetchAnnexes();
    },
}
</script>