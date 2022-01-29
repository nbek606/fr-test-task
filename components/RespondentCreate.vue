<template>
  <div 
    class="respondent__create"
    @click="create"
  >
    <p class="respondent__create-icon">
      + 
    </p>
    <p class="respondent__create-title">
      Нажмите, чтобы добавить новое условие выборки. <br>
      Все условия связываются между собой логически "И"
    </p>
  </div>
</template>
<script>

export default {
  name: 'RespondentCreate',
  data () {
    return {
      lastId: 1
    }
  },
  computed: {
   
  },
  methods: {
    create () {
        const respondent = {
            id: this.lastId,
            name: `Условие ${this.lastId}`,
            condition: null,
            properties: {
                age: [],
                typeCard: [],
                statusCard: []
            }
        }

        this.$emit('create', respondent)

        this.lastId++
    }
  }
}
</script>
<style lang="scss" scoped>
  .respondent__create {
    width: 100%;
    font-size: 20px;
    color: green;
    border: 1px solid silver;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 20px;

    &-icon {
      text-align: center;
      font-size: 50px;
      margin:0;
    }

    &-title {
      margin-top: 0;
      text-align: center;
    }
  }
</style>