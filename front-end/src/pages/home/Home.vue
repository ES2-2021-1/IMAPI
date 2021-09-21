<template>
  <div>
    <div class="dropdown"><button class="btn btn-primary dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button" style="background: var(--bs-success);width: 100%;">Filtrar</button>
        <div class="dropdown-menu"><a class="dropdown-item" href="#">Análise</a><a class="dropdown-item" href="#">Em progresso</a><a class="dropdown-item" href="#">Rejeitadas</a></div>
    </div>
    <div class="row g-0 row-cols-xl-3 row-cols-xxl-3 d-flex justify-content-lg-start justify-content-xl-start justify-content-xxl-start" style="margin-top: 50px;">
        <div class="col d-flex d-sm-flex d-md-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center">
            <div class="card" style="padding: 0;margin: 25px;max-width: 300px;box-shadow: 0px 0px;">
                <div class="card-body d-flex d-xl-flex flex-column align-items-center justify-content-sm-start align-items-sm-center justify-content-md-start align-items-md-center justify-content-lg-start align-items-lg-center justify-content-xl-start align-items-xl-center justify-content-xxl-start align-items-xxl-center" style="background: #1a1a1a;box-shadow: 1px 1px 3px var(--bs-dark);border-radius: 4px;min-width: 260px;height: 434px;width: 282px;">
                    <h4 class="card-title" style="color: var(--bs-white);margin: 25px;margin-top: 65px;margin-bottom: 80px;">Adicionar Startup</h4><a class="card-link" href="nova-startup.html"><img class="d-xl-flex justify-content-center align-items-xl-center" data-bss-hover-animate="tada" :src="require('@/assets/img/plus.png')" style="height: 80px;width: 80px;filter: invert();"></a>
                </div>
            </div>
        </div>

        <StartupBox :img="require('@/assets/img/logo sample.png')" title="Título da Startup" description="Descrição curta sobre a Startup, lorem ipsum, simus harahair manesacas" status="Em avaliação" />

        <StartupBox :img="require('@/assets/img/Logo_ÍCONE BRANCO.png')" title="Título da Startup" description="Descrição curta sobre a Startup, lorem ipsum, simus harahair manesacas" status="Fase 1 - Documentos" />

        <StartupBox :img="require('@/assets/img/Logo_ÍCONE BRANCO.png')" title="Título da Startup" description="Descrição curta sobre a Startup, lorem ipsum, simus harahair manesacas" status="Ideia Recusada" />
    </div>
  </div>
</template>

<script>
import StartupBox from "./components/StartupBox.vue";

export default {
    name: 'Home',
    components: {
        StartupBox,
    }
}
</script>

<style>

</style>