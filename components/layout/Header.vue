<template>
  <div class="header">
    <div class="header__top">
      <Search />
      <User />
    </div>
    <div class="header__bottom">
       <Breadcrumbs />
    </div>
  </div>
</template>

<script>

/* import components */
import Search from './Search.vue'
import User from './User.vue'
import Breadcrumbs from './Breadcrumbs.vue'

export default {
  name: 'Header',
  components: {
    Search,
    User,
    Breadcrumbs 
  }  
}
</script>

<style lang="scss" scoped>
  .header {
    padding: 30px 40px;
    margin-left: 141px;
    position: fixed;
    background-color: #fff;
    width: calc(100% - 181px);

    &__top {
      display: flex;
      flex-direction:row;
    }
  }
</style>