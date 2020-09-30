<template>
  <div id="app">
    <DynamicSidebar
      class="main-wrapper"
    >
      <router-view
        :key="$route.fullPath"
        class="outer-container"
      />
    </DynamicSidebar>
  </div>
</template>

<script>
import DynamicSidebar from '@/components/dynamic-sidebar'

export default {
  components: {
    DynamicSidebar
  }
}

</script>