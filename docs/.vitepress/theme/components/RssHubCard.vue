<template>
  <div class="rsshub-card">
    <img src="/images/rsshub-logo.webp" alt="RSSHub" width="100" loading="lazy" />
    <h1 class="rsshub-card-title">Welcome to <span class="rsshub-card-brand"><a href="https://rsshub.agrreader.xyz/">Agr Reader's</a></span> <span class="rsshub-card-accent">RSSHub</span>!</h1>
    <button class="rsshub-card-go" type="button" @click="go">GO!</button>
  </div>
</template>

<script setup>
const RSSHUB_URL = 'https://rsshub.agrreader.xyz/'

function go() {
  window.location.href = RSSHUB_URL
}
</script>
