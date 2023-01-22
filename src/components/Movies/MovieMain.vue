
<template>
<div>
    <h1>Movies</h1>
    <hr />  
</div>

</template>
<script>
import { ApiGet } from "../common/Api.js";
export default{
     mounted() {
        ApiGet('/api/movies')
            .then(data => {
                console.log(data);
            })
     }
}
</script>
<style></style>