<template>
<home/>
<carousel/>
<table/>

</template>

<script>
// @ is an alias to /src
import Home from '@/components/home.vue'
import Carousel from '@/components/carousel.vue'
import Table from '@/components/table.vue'

export default {
  components:{Home, Carousel, Table}
}
</script>
