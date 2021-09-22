<template>
    <div>
        <div class="text-center">
            <b-button v-b-toggle="'collapse-task'+task.id" variant="primary">Ver Tarefa</b-button>
        </div>

        <b-collapse :id="'collapse-task'+task.id" class="mt-3">
            <hr class="my-4">
            <h4 class="text-center">Tarefa</h4>

            <p class="py-2">{{task.description}}</p>
            
            <div>
                <b-form-file
                    v-model="file1"
                    :state="Boolean(file1)"
                    placeholder="Choose a file or drop it here..."
                    drop-placeholder="Drop file here..."
                    ></b-form-file>
            </div>
        </b-collapse>
    </div>
</template>

<script>
import Task from "./Task.vue";


export default {
	name: 'Task',
    props: {
        task : Task
    },
    data() {
        return {
            file1: null,
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