<template>
    <b-container class="pt-5">
        <b-row>
            <div class="col justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center" >
                <div class="card">
                    <div class="card-body d-flex d-xl-flex d-xxl-flex flex-column align-items-center justify-content-xl-center align-items-xl-center" style="color: rgb(255,255,255);background: #1a1a1a;"><img class="d-flex" :src="require('@/assets/img/logo sample.png')" style="height: 100px;">
                        <h4 class="card-title">Título Startup</h4>
                        <p class="card-text">Descrição da start up id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <b-progress :value="75" :max="100" show-progress animated primary></b-progress>
                <div class="accordion" role="tablist" id="accordion-1">
                    <Module/>
                </div>
            </div>
        </b-row>
    </b-container>
</template>

<script>
import Module from "./components/Module.vue";

export default {
	name: 'StartupDetails',
	components: {
        Module
	},
}
</script>

<style>

</style>