<template>
  <div 
    class="status__card"
    v-if="!isEmpty"
  >
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