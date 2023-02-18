<template>
<div class="card">
    <div class="card__inform">
        <h1 class="card__inform-name">{{ props.item.name }}</h1>
        <h2 class="card__inform-status" 
         :style="statusColor">
         {{ props.item.status }}
        </h2>
        <p class="card__inform-gender">{{ props.item.gender }}</p>
        <p class="card__inform-location">{{ props.item.origin.name }}</p>
    </div>
    <div class="card__image" 
     :style="{ backgroundImage: `url(${props.item.image})` }">
    </div>
</div>
</template>

<script setup>
import './media.scss'
import './style.scss'
import { computed } from 'vue';

const props = defineProps(['item'])

const statusColor = computed(() => {
  if (props.item.status === "Alive") return { color: "green" }
  else if (props.item.status === "Dead") return { color: "red" }
  else return { color: "grey" };
});
</script>

