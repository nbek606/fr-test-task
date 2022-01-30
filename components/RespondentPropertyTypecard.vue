<template>
  <div 
    class="type__card"
  >
    <div >
      <div 
        class="type__card__item"
        v-for="(property, index) in properties"
        :key="index"
      >
        <div class="type__card__item-title">
            {{ property.name }}
        </div>
      
        <select
          v-model="property.type"
          class="type__card__item-select"
        >
          <option
            v-for="(item, index) in typeCards"
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
      + Добавить тип
    </button>
  </div>
</template>
<script>
export default {
  name: 'RespondentPropertyTypeCard',
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
      typeCards: [
        {
          text: 'Выберите тип',
          value: null
        },
        {
          text: 'Gold',
          value: 'gold'
        },
        {
          text: 'Silver',
          value: 'silver'
        },
        {
          text: 'Bronze',
          value: 'bronze'
        }
      ]
    }
  },

  methods: {
    addProperty () {
      this.$emit('add-property', {
         name: `Тип ${this.increment}`,
         type: null
      })

      this.increment++
    }
  },
}
</script>
<style lang="scss" scoped>
  .type__card {
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