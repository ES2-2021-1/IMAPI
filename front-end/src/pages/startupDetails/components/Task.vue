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
                    v-model="files"
                    :state="Boolean(files)"
                    placeholder="Choose a file or drop it here..."
                    drop-placeholder="Drop file here..."
                    multiple
                    ></b-form-file>
                <div class="d-flex justify-content-center m-2 ">
                    <b-button-group>
                        <b-button @click="onSubmit" type="submit" variant="primary">Submit</b-button>
                        <b-button @click="files = null" type="reset" variant="danger">Reset</b-button>
                    </b-button-group>
                </div>
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
            files: [],
            uploads: []
        }
    },
    methods: {
        async onSubmit() {
            for(var file of this.files){
                console.log(file);
                let dataForm = new FormData(); 
                dataForm.append('upload', file);
                const headers = {Authorization: `Bearer ${this.$session.get("jwt")}`, 'Content-Type': 'multipart/form-data'};

                let { data } = await window.axios.post(`/api/upload/`,dataForm, { headers });
                this.uploads.push(data);
            }
            console.log(this.uploads);
        },
    },
    created() {
        // this.fetchSteps();
    },
}
</script>