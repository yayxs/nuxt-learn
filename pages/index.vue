<script setup lang="ts">
const appConfig = useAppConfig()
</script>
<template>
  <div>
    <AppTitle> {{ appConfig.title }} </AppTitle>
  </div>
</template>
