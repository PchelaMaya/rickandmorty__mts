<template>
    <span class="button"
      @click="!disable ? emit('click') : undefined"
      :class="{ enable: !disable, disable: disable }"
    >
    {{ value }}
    </span>
</template>

<script setup>
import './style.scss'

const { value, disable } = defineProps(["value", "disable"]);
const emit = defineEmits(["click"]);

</script>