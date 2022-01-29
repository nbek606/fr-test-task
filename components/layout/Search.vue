<template>
  <div class="search">
      <input
        v-model="search"
        class="search__input"
        placeholder="Поиск по системе"
      />
      <div class="search__icon">
        <SearchIcon />
      </div>
  </div>
</template>
<script>

/* import icons */
import SearchIcon from '@/static/svg/search.svg?inline'

export default {
  name: 'Search',
  components: {
    SearchIcon
  },
  data () {
    return {
      search: ''
    }
  }
}
</script>
<style lang="scss" scoped>
  .search {
    width: 70%;

    &__input {
      padding-right: 0;
      padding:0 20px;
      height: 40px;
      border-radius: 5px 0 0 5px;
      border: 1px solid silver;
      border-right: none;
      float: left;
      width: calc(100% - 140px);

    }

    &__icon {
      width: 20px;
      height: 20px;
      float: left;
      border-radius: 0 5px 5px 0;
      border: 1px solid silver;
      border-left: 0;
      padding: 0 20px;
      height: 40px;


      svg {
        width: 100%;
        height: 100%;
        align-items: center;
      }
    }
  }
</style>