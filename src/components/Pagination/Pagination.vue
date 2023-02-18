<template>
  <Button v-if="currentPage > 3" 
    value="1" @click="start" 
    :disable="!info?.next" 
  />

  <Button class="current"
    v-if="currentPage > 4" 
    value="..." 
    @click="getPage(--currentPage)" 
    :disable="!info?.prev" 
  />

  <Button v-else-if="currentPage - 2 > 0" 
    :value="currentPage - 2" 
    @click="getPage(--currentPage)" 
    :disable="!info?.prev" 
  />
          
  <Button v-if="currentPage - 1 > 0" 
    :value="currentPage - 1" 
    @click="getPage(--currentPage)" 
    :disable="!info?.prev" 
  />
        
  <span class="current">{{ currentPage }}</span>
        
  <Button v-if="currentPage < info?.pages - 2"
    :value="currentPage + 1" 
    @click="getPage(++currentPage)" 
    :disable="!info?.next" 
  />
      
  <Button class="current"
    v-if="currentPage + 3 < info?.pages" 
    value="..." 
    @click="getPage(++currentPage)" 
    :disable="!info?.next"
  />
        
  <Button v-else-if="currentPage == info?.pages - 2"
    :value="info?.pages - 1" 
    @click="getPage(++currentPage)" 
    :disable="!info?.next" 
  />
        
  <Button v-else-if="currentPage == info?.pages - 3"
    :value="info?.pages - 1" 
    @click="getPage(++currentPage)" 
    :disable="!info?.next" 
  />

  <Button v-if="currentPage < info?.pages"
    :value="info?.pages" 
    @click="end, getPage(++currentPage)" 
    :disable="!info?.prev" 
  />
</template>

<script setup>
import { ref } from "vue";
import Button from "@/components/Pagination/Button.vue";

import './style.scss'

const props = defineProps(['info'])
const emit = defineEmits(["getPage"]);

const currentPage = ref(1);

const getPage = async (pageNum) => {
  emit("getPage", pageNum);
};

const start = () => {
  currentPage.value = 1;
  getPage(currentPage.value);
};

const end = () => {
  currentPage.value = info?.pages;
  getPage(currentPage.value);
};
</script>

