<template>
  <Button v-if="currentPage > 3" 
    value="1" @click="startOrEnd, disable = !disable" 
    :disable="!info?.prev" 
  />

  <Button
    :value="valuePrev" 
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
      
  <Button
    :value="valueNext" 
    @click="getPage(++currentPage)" 
    :disable="!info?.next"
  />
  
  <Button v-if="currentPage < info?.pages"
    :value="info?.pages" 
    @click="startOrEnd, getPage(++currentPage)" 
    :disable="!info?.next" 
  /> 
</template>

<script setup>
import { ref, computed } from "vue";
import Button from "@/components/Pagination/Button.vue";

import './style.scss'

const { props } = defineProps(["info"])
const emit = defineEmits(["getPage"]);

const currentPage = ref(1);

const getPage = async (pageNum) => {
  try {
    emit("getPage", pageNum);

  } catch (e) {
    console.log(e);
  }
};

const startOrEnd = () => {
  if (currentPage.value === 1 || currentPage.value === info?.pages) {
  getPage(currentPage.value);
  }
}

const valuePrev = computed(() => {
  if (currentPage.value > 4) 
  return "..."
  else if (currentPage.value - 2 > 0) 
  return currentPage.value - 2
})

let infoPages = 42;

const valueNext = computed(() => {
  if (currentPage.value + 3 < infoPages) 
  return "..."
  
  else if (currentPage.value == infoPages - 2 || currentPage.value == infoPages - 3) 
  return infoPages - 1
})

</script>

