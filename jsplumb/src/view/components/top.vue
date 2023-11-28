<template>
    <div class="jsplumbTop">
        <p>CXK流程图</p>
        <div>
            <div>
                <span>编辑模式</span>
                <el-switch v-model="isState" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Top',
};
</script>

<script setup>
import { ref } from 'vue';
const isState = ref(true);
</script>

<style lang="scss" scoped>
.jsplumbTop {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    span {
        margin-right: 10px;
    }
}
</style>
