<template>
  <div>
    <div class="tab">
      <div
        class="tab__item"
        :class="{ tab__active: item.active }"
        v-for="(item, index) in tabs"
        :key="index"
        @click="changeTab(index)"
      >
        {{ item.caption }}
      </div>
    </div>
    <div 
      v-for="(item, index) in tabs"
      :key="index"
    >
      <component 
        v-if="item.active"
        :is="item.component"
      />
    </div>
  </div>
</template>
<script>

export default {
  name: 'SurveyCreate',
  data () {
    return {
      tabs: [
        {
          caption: 'Параметры',
          active: false,
          component: 'Settings'
        },
        {
          caption: 'Вопросы',
          active: false,
          component: 'Questions'
        },
        {
          caption: 'Логика',
          active: false,
          component: 'Logics'
        },
        {
          caption: 'Условия',
          active: false,
          component: 'Condition'
        },
        {
          caption: 'Респонденты',
          active: true,
          component: 'Respondents'
        },
      ]
    }
  },
  methods: {
    changeTab (index) {
      this.tabs.map(item => item.active = false)
      this.tabs[index].active = true
    }
  }
}
</script>
<style lang="scss" scoped>
  .tab {
    display: flex;

    &__item {
      padding: 10px 20px;
      color: green;
      font-weight: 600;
      cursor: pointer;
    }

    &__active {
      border-bottom: 2px solid green;
      color: #333;
    }
  }
</style>