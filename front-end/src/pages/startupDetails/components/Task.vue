<template>
    <div>
        <div class="text-center">
            <b-button v-b-toggle="'collapse-task'+task.id" variant="primary">Ver Tarefa</b-button>
        </div>

        <b-collapse :id="'collapse-task'+task.id" class="mt-3">
            <hr class="my-4">
            <h4 class="text-center">Tarefa</h4>

            <p class="py-2">{{task.description}}</p>

            <div v-if="taskAnnexes.length > 0">
                <hr>
                <b-list-group>
                    <b-list-group-item v-for="taskAnnex in taskAnnexes" :key="taskAnnex.id">{{taskAnnex.path}}</b-list-group-item>
                </b-list-group>
            </div>
            
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
            <div v-if="submissionAnnexes.length > 0">
                <hr>
                <b-list-group>
                    <b-list-group-item v-for="submissionAnnex in submissionAnnexes" :key="submissionAnnex.id">{{submissionAnnex.path}}</b-list-group-item>
                </b-list-group>
            </div>
        </b-collapse>
    </div>
</template>

<script>
import Task from "./Task.vue";


export default {
	name: 'Task',
    props: {
        task : Task,
        startupId: null,
        annexes: [],
    },
    data() {
        return {
            files: [],
            submission: null,
            taskAnnexes : [],
            submissionAnnexes : [],
        }
    },
    methods: {
        async onSubmit() {
            for(var file of this.files){
                console.log(file);
                let dataForm = new FormData(); 
                dataForm.append('upload', file);
                const headers = {Authorization: `Bearer ${this.$session.get("jwt")}`, 'Content-Type': 'multipart/form-data'};

                let upload = await window.axios.post(`/api/upload/`,dataForm, { headers });
                var submissionId;
                if(this.submission == null){
                    let submission = await window.axios.post('/api/submission/',{
                        "submissionDate": new Date(),
                        "feedBack": "",
                        "taskId": this.task.id,
                        "startupId": this.startupId
                    }, {headers: { Authorization: `Bearer ${this.$session.get("jwt")}`}});

                    submissionId = submission.data.id;
                } else{
                    submissionId = this.submission.id;
                }

                await window.axios.post('/api/annex/',{
                    "path": upload.data.path,
                    "type": 2,
                    "submissionId": submissionId
                }, {headers: { Authorization: `Bearer ${this.$session.get("jwt")}`}})
            }
            document.location.reload();
        },
        async fetchAnnexes() {
            var submissions = await window.axios.get(`/api/submission/`, {headers: { Authorization: `Bearer ${this.$session.get("jwt")}`}});
            for await(var submission of submissions.data){
                if(submission.taskId == this.task.id){
                    this.submission = submission;
                }
            }
            if(this.submission){
                for await(let annex of this.annexes){
                    if(annex.taskId == this.task.id){
                        this.taskAnnexes.push(annex);
                    }
                    if(annex.submissionId == this.submission.id){
                        this.submissionAnnexes.push(annex);
                    }
                }
            }
        },
    },
    created() {
        this.fetchAnnexes();
    },
}
</script>