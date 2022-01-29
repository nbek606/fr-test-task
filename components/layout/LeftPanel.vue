<template>
  <div class="panel">
    <div class="panel__logo">
      <span class="panel__logo-icon">
        <Logo />
      </span>
    </div>
    <!--show menu-->
    <div class="panel__menu">
        <div 
          class="panel__menu__item"
          :class="{ menu__active : $route.path.includes(item.link) }"
          v-for="(item, index) in menu"
          :key="index"
        >
        <NuxtLink :to="item.link">
          <!--icon-->
          <span class="panel__menu__item-icon">
            <i>
              <div :is="item.icon"/>
            </i>
          </span>
          <!---title-->
          <span class="panel__menu__item-title">
            {{ item.title }}
          </span>
        </NuxtLink>
        </div>
    </div>
  </div>
</template>
<script>

import { mapGetters } from 'vuex'

/* import icons */
import Survey from '@/static/svg/survey.svg?inline'
import Call from '@/static/svg/call.svg?inline'
import BlackList from '@/static/svg/blacklist.svg?inline'
import Users from '@/static/svg/users.svg?inline'
import Logo from '@/static/svg/logo.svg?inline'

export default {
  name: 'LeftPanel',
  components: {
    Survey,
    Call,
    BlackList,
    Users,
    Logo
  },
  computed: {
    ...mapGetters({
      menu: 'menu/leftPanel'
    })
  }
}
</script>
<style lang="scss" scoped>
  .panel {
    width: 140px;
    height: 100vh;
    position: fixed;
    border-right: 1px solid silver;

    &__logo {
      width: 100%;

      &-icon {
        display: flex;
        width: 40px;
        height: 40px;
        margin: auto;
        padding: 20px 0;

        svg {
          width: 100%;
          height: 100%;
        } 
      }
    }

    &__menu {
      padding: 15px;

      &__item {
        width: 100%;
        text-align: center;
        padding: 20px 0;
        margin: 10px 0;
        cursor: pointer;
        border-radius: 10px;

        a {
          color: #333;
          text-decoration: none;
        }

        &:hover {
          background-color: #dedfdf;
        }

        &-title {
          width: 100%;
        }

        &-icon {
          display: block;
          width: 100%;
          height: 50px;
          width: 50px;
          margin: auto;

          svg {
            height: 100%;
            width: 100%;
          }
        }
      }
    }

    .menu__active {
        background-color: #dedfdf;
    }

  }
</style>