<template>
    <div>
        <h2>Movies</h2>
    </div>
</template>

<script>
import {ApiGet} from "../common/Api"

    export default {
        
        mounted () {
            ApiGet('/api/movies')
            .then(data=>{
                console.log(data);
            });
        },
    }
</script>

<style lang="scss" scoped>

</style>