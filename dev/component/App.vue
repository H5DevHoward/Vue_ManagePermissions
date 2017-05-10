<template>
    <div class="wrapper">
        <vuex-test />
        <router-view />
    </div>
</template>

<script>
import VuexTest from './VuexTest.vue';
import RouterView from './RouterView';

export default {
    components: {
        VuexTest,
        RouterView,
    },
};
</script>
