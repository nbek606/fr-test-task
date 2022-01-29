<template>
  <div class="respondents">
      <!--respondent list-->
       <RespondentItem
          v-for="item in list"
          :key="item.id"
          :respondent="item"
          @remove="remove"
      />
      <!--respondent create-->
      <RespondentCreate 
        @create="create"
      />
  </div>
</template>
<script>
export default {
  name: 'Repondents',
  data () {
    return {
      list: []
    }
  },
  methods: {
    create (respondent) {
      this.list.push(respondent)
    },
    remove (id) {
      this.list = this.list.filter(item => item.id != id)
    }
  }
}
</script>
<style lang="scss" scoped>
  .respondents {
    padding: 20px 20px;
    box-shadow: -2px 8px 16px -1px rgba(34, 60, 80, 0.35);
    }
</style>