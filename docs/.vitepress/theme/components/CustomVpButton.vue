<template>
  <a :href="link" class="custom-button">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'CustomVPButton',
  props: {
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.custom-button {
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  background-color: #ff5733;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

.custom-button:hover {
  background-color: #c70039;
}
</style>
