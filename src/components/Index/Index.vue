<script setup>
import Card from '@/components/Card/Card.vue';
import './style.scss'
import axios from "axios"

import { ref, onMounted } from 'vue';

var data = ref();

onMounted( async() => {
    const respone = await axios.get("https://rickandmortyapi.com/api/character");
    data.value =  await respone.data.results;
    console.log(data);
});

</script>

<template>
<section class="container">
    <div class="cards">
        <Card v-for="item in data" 
        :key="item.id"
        :item="item"
        />
    </div>
</section>
</template>

<style scoped>

</style>
