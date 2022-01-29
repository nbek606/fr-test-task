<template>
  <div 
    class="breadcrumb" 
    v-if="$route.path != '/'"
  >
    <!--Home page-->
    <div class="breadcrumb__home">
      <NuxtLink
        :to="'/'" 
      >
        <Home />
      </NuxtLink>
    </div>
    <!--pages list-->
    <div 
      v-for="(item, index) in crumbs" 
      :key="index" 
      class="breadcrumb__item"
    >
      <!--next icon-->
      <span 
        class="breadcrumb__next-icon"
        v-if="crumbs.length > 0"
      >
        <Next />
      </span>
      <!--pages links-->
      <nuxt-link :to="item.fullPath" class="breadcrumb__item__title">
          {{ linkRusName[item.fullPath].title }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

/* import icon */
import Home from '@/static/svg/home.svg?inline'
import Next from '@/static/svg/next.svg?inline'

export default {
  name: 'Breadcrumb',
  components: {
    Home,
    Next
  },
  computed: {
    ...mapGetters({
      linkRusName: 'breadcumbs/getList'
    }),
    crumbs() {
      const fullPath = this.$route.fullPath
      const params = fullPath.startsWith('/')
        ? fullPath.substring(1).split('/')
        : fullPath.split('/')
      const crumbs = []
      let path = ''

      params.forEach((param, index) => {
        path = `${path}/${param}`
        const match = this.$router.match(path)
        if (match.name !== null) {
          crumbs.push({
            title: param.replace(/-/g, ' '),
            ...match,
          })
        }
      })
     
      return crumbs
    }
  }
}
</script>

<style lang="scss" scoped>
    .breadcrumb {
      display: flex;
    
      &__home {
        width: 20px;
        height: 20px;
        
        svg {
          width: 100%;
          height: 100%;
        }
      }

      &__next-icon {
        display: block;
        width: 15px;
        height: 15px;
        margin: 0 3px;

        svg {
          width: 100%;
          height: 100%;
        }
      }

      &__item {
        display: flex;
        align-items: center;
      }
    }

    a {
      text-decoration: none;
      color: #333;
      font-weight: 00;
    }
</style>