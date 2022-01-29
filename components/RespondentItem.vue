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
        />
      </div>

      <!--buttons-->
      <div class="buttons">
          <button 
            v-if="condition"
            class="buttons__add"
            @click="addProperty"
          >
            + Добавить {{ condition.title.toLowerCase() }}
          </button>

          <button  
            class="buttons__remove"
            @click="remove"
          >Удалить
          </button>
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
      addProperty () {
        const type = this.condition.type
        const increment = this.increment[type];
        let properties = {}
        
        if (this.condition.type == "age") {
          properties = {
            name: `${this.condition.title} ${increment}`,
            after: null,
            before: null
          }
        }

        if (this.condition.type == "typeCard") {
          properties = {
            name: `${this.condition.title} ${increment}`,
            type: null
          }
        }

        if (this.condition.type == "statusCard") {
          properties = {
            name: `${this.condition.title} ${increment}`,
            active: 'false'
          }
        }
       
        this.respondent.properties[type].push(properties)
        this.increment[type]++
      },
      
      remove () {
        this.$emit('remove', this.respondent.id)
      }
    }
}
</script>
<style lang="scss" scoped>
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

  .buttons {
    button {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      margin-top: 20px;
      cursor: pointer;
    }

    &__add {
      color: #fff;
      background-color: green;
    }

    &__remove {
      color: #fff;
      background-color:#ff4b56;
      margin-left: auto;
    }
  }
</style>