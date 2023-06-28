<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col" v-for="item in data" :key="item.name">
                    <div class="card" style="width: 100%;">
                    <img :src="item.image" class="card-img-top" alt="item.tittle">
                    <div class="card-body">
                        <h1>{{item.model}}</h1>
                        <h4>{{item.price}}</h4>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                data:[]
            }
        },
        methods:{
            async fetchData(){
                const res = await fetch("https://mihlali-ma.github.io/json-server/index.json");
                let parseData = await res.json()
                this.data = parseData.products
            }
        },
        mounted(){
            this.fetchData()
        }
    }
</script>

<style>

</style>