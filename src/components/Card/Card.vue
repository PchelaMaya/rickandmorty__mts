<script setup>
import './style.scss'

const props = defineProps(['item'])
</script>

<template>
<div class="card">
    <div class="card__inform">
        <h1 class="card__inform-name">{{ props.item.name }}</h1>
        <h2 class="card__inform-status">{{ props.item.status }}</h2>
        <p class="card__inform-gender">{{ props.item.gender }}</p>
        <p class="card__inform-location">{{ props.item.origin.name }}</p>
    </div>
    <div class="card__image">
        <img :src="props.item.image">
    </div>
</div>
</template>
