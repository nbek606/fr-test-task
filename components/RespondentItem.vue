<template>
  <div class="respondent__item">
      
      <!--condition-->
      <div class="condition">
        
        <div class="condition__title">
            {{ respondent.name }}
        </div>

        <select 
          v-model="condition"
          class="condition__select"
        >
          <option
            v-for="(item, index) in conditionVariants"
            :key="index"
            :value="item.value"
          >
            {{ item.text }}
          </option>
        </select>

      </div>

      <!--condition properties-->
      <div v-if="condition">  
        <component 
          :is="propertyComponentName" 
          :properties="respondent.properties[condition.type]"
          @add-property="addProperty"
        />
      </div>
  </div>
</template>
<script>

/* import lodash */
import _ from 'lodash'

export default {
   name: 'RespondentListItem',
   props: {
     respondent: {
       type: [Object, Array],
       required: true
    }
   },
   data () {
      return {
        condition: this.respondent.condition,
        increment: {
          age: 1,
          typeCard: 1,
          statusCard: 1
        },

        conditionVariants: [
          {
            text:'Выберите условие',
            value: null
          },
          {
            text: 'Возраст респондента',
            value: {
              type: 'age',
              title: 'Диапазон'
            }
          },
          {
            text: 'Тип карты лояльности',
            value: {
              type: 'typeCard',
              title: 'Тип'
            }
          },
          {
            text: 'Статус карты лояльности',
            value: {
              type: 'statusCard',
              title: 'Статус'
            }
          },
        ]
      }
    },

    computed: {
      propertyComponentName () {
        if (this.condition) {          
          return `RespondentProperty${_.capitalize(this.condition.type)}`
        }
      }
    },

    methods: {
      addProperty (property) {
        const type = this.condition.type
        this.respondent.properties[type].push(property)
      },
      
      remove () {
        this.$emit('remove', this.respondent.id)
      }
    }
}
</script>
<style lang="scss">
  .respondent__item {
    border-bottom: 1px solid silver;
    padding: 20px 0;
  }

  .condition {
    display: flex;

    &__title {
      font-size: 20px;
      font-weight: 600;
    }

    &__select {
      margin-left: auto;
      width: 70%;
      padding: 10px;
    }
  }

 
  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    cursor: pointer;
  }

  .button__add {
    color: #fff;
    background-color: green;
  }

  .button__remove {
    color: #fff;
    background-color:#ff4b56;
    margin-left: auto;
  }
</style>