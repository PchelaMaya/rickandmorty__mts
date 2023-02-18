<template>
<section class="container">
    <div class="cards">
      <Card v-for="item in data" 
       :key="item.id"
       :item="item"
      />
    </div>
</section>
<div class="pagination">
  <Pagination :info="info" 
    @getPage="getCharacters" 
  />
</div>
</template>

<script setup>
import Card from '@/components/Card/Card.vue';
import Pagination from '@/components/Pagination/Pagination.vue'
import { ref, onMounted } from 'vue';

import './media.scss'
import './style.scss'

const data = ref([]);
const info = ref(null);

async function getCharacters(pageNum = 1) {
  const response = await fetch("https://rickandmortyapi.com/api/character" + `?page=${pageNum}`);
  const characters = await response.json();
  data.value = characters.results;
  info.value = characters.info;
}

onMounted(async () => {
  await getCharacters();
});

</script>

