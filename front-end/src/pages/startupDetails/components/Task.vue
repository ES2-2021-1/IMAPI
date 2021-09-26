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
                        <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
                    </b-button-group>
                </div>
            </div>

            <div class="large-12 medium-12 small-12 cell">
                <h1>Vue JS Axios - Image Upload using PHP API - ItSolutionStuff.com</h1>
                <label>File
                    <input type="file" id="file" ref="file" v-on:change="onChangeFileUpload()"/>
                </label>
                <button v-on:click="submitForm()">Upload</button>
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
        async onSubmit(event) {
            // for(var file of this.files){
                const file = event.target.files[0]  
                let { data } = await window.axios.post(`/api/upload/`,
                    {upload: file},
                    {headers: { Authorization: `Bearer ${this.$session.get("jwt")}`, 'Content-Type': 'multipart/form-data'}}
                );
                this.uploads.push(data);
            // }
            console.log(this.uploads);
        },
        // onReset(event) {
        //     event.preventDefault()
        //     // Reset our form values
        //     this.form.email = ''
        //     this.form.name = ''
        //     this.form.food = null
        //     this.form.checked = []
        //     // Trick to reset/clear native browser form validation state
        //     this.show = false
        //     this.$nextTick(() => {
        //         this.show = true
        //     })
        // }
    },
    created() {
        // this.fetchSteps();
    },
}
</script>