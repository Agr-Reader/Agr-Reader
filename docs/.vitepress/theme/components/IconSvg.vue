<script setup lang="ts">
interface Props {
  svg: string
}
defineProps<Props>()
</script>

<template>
  <span class="agr-icon" aria-hidden="true" v-html="svg"></span>
</template>
