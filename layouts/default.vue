<template>
  <div>
    <!--left panel menu-->
    <LeftPanel />
    <!--header-->
    <Header />
    <nuxt />
  </div>
</template>
<script>

import Header from '@/components/layout/Header.vue'
import LeftPanel from '@/components/layout/LeftPanel.vue'

export default {
  components: {
    Header,
    LeftPanel
  },
  name: 'default'
}
</script>
