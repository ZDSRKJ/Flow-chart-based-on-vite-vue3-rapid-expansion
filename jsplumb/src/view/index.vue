<template>
    <div class="home">
        <div class="home-top">
            <top></top>
        </div>
        <div class="home-bottom" :style="{ height: `${clientHeight}px` }">
            <div class="home-bottom-left">
                <left></left>
            </div>
            <div
                class="home-bottom-right"
                :style="{ width: `${clientWidth}px` }"
            >
                <centers></centers>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
};
</script>

<script setup>
import left from './components/left.vue';
import centers from './components/center.vue';
import top from './components/top.vue';
import { onMounted, reactive, toRefs } from 'vue';

let data = reactive({
    clientWidth: document.body.clientWidth - 200,
    clientHeight: 619,
});
let { clientWidth, clientHeight } = toRefs(data);
onMounted(() => {
    clientHeight.value = document.body.clientHeight - 52;
});
</script>

<style lang="scss" scoped>
.home {
    height: 100vh;
    &-top {
        height: 50px;
    }
    &-bottom {
        width: 100%;
        display: flex;
        border-top: 1px solid #eaeaea;
        &-left {
            width: 200px;
            border-right: 1px solid #eaeaea;
        }
    }
}
</style>
