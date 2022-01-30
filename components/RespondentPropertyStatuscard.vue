<template>
  <div 
    class="status__card"
  >
    <div  v-if="!isEmpty">
      <div 
        class="status__card__item"
        v-for="(property, index) in properties"
        :key="index"
      >
        <div class="status__card__item-title">
            {{ property.name }}
        </div>
        <select
          v-model="property.active"
          class="status__card__item-select"
        >
          <option
            v-for="(item, index) in statuses"
            :key="index"
            :selected="item.value == property.type"
            :value="item.value"
          >
            {{ item.text }}
          </option>
        </select>
      </div>
    </div>

    <button 
      class="button button__add"
      @click="addProperty"
    >
      + Добавить статус
    </button>
  </div>
</template>
<script>
export default {
  name: 'RespondentPropertyStatusCard',
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
  },
  data () {
    return {
      increment: 1,
      typeCardValue: this.properties.type,
      statuses: [
        {
          text: 'Активная',
          value: true
        },
        {
          text: 'Не активная',
          value: false
        }
      ]
    }
  },
  methods: {
     addProperty () {
      this.$emit('add-property', {
         name: `Статус ${this.increment}`,
         active: false
      })

      this.increment++
    }
  }
}
</script>
<style lang="scss" scoped>
  .status__card {
    &__item {
      display: flex;
      margin: 20px 0;

      &-title {
        width: 30%;
        font-size: 20px;
      }

      &-select {
        width: 60%;
        padding: 10px;
      }
    }
  }
</style>