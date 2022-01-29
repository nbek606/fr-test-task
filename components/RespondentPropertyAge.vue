<template>
  <div
    class="age"
    v-if="!isEmpty"
  >
      <div 
        v-for="(item, index ) in properties"
        :key="index"
        class="age__item"
      >   
          <div class="age__title">
              {{ item.name }}
          </div>
          <div class="age__input__group">
            От: <input  v-model="item.after"/>
            До: <input  v-model="item.before"/>
          </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'RespondentListItemAge',
  props: {
    properties: {
      type: [Object, Array],
      required: true
    }
  },
  computed: {
    isEmpty () {
      return this.properties?.length == 0
    }
  }
}
</script>
<style lang="scss" scoped>
   .age {
    width: 100%;

    &__item {
      display: flex;
      padding: 20px 0;
    }

    &__title {
      width: 30%;
      font-size: 20px;
    }

    &__input__group {
      input {
        padding: 10px;
        margin: 0 10px;
      }
    }
  }
</style>