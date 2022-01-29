<template>
  <div class="user">
      <img 
        class="user__img"
        :src="user.img"
      />
      <div class="user__data">
        <div class="user__data-name">
          {{ user.name }}
        </div>
        <div class="user__data-position">
          {{ user.position }}
        </div>
      </div>
  </div>
</template>
<script>

import { mapGetters } from 'vuex'

export default {
  name:'User',
  computed: {
    ...mapGetters({
      user: 'user/getCurrentUser'
    })
  }
}
</script>
<style lang="scss" scoped>
  .user {
    display: flex;
    margin-right: 40px;
    margin-left:auto;

    &__img {
      width: 60px;
      height: 60px;
      border-radius: 100%;
    }

    &__data {
      padding-left: 10px;

      &-name {
        font-weight: 800;
        padding: 5px 0;
      }
    }
  }
</style>