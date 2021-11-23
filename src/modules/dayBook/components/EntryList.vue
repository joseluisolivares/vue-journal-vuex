<template>
    <div 
        class="entry-list-container"
        >
        <div class="px-2 pt-2">
            <input type="text" name="" id="" placeholder="Buscar Entrada" class="form-control">
        </div>
        <div class="entry-scrollarea">
            <Entry
                v-for="item in 100" 
                :key="item"
            />
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    name:'Entry list',
    components:{
        Entry: defineAsyncComponent( () => import('./Entry.vue'))
    }
}
</script>

<style lang="scss" scoped>
    input{
        height: 36px;
        margin-bottom:0.5rem;
    }
    .entry-list-container{
        border-right:1px solid #2c3e50;
        height:calc(100vh - 56px);
        overflow: hidden;
    }
    .entry-scrollarea{
        height:calc(100vh - 90px);
        overflow: scroll;   
    }
</style>