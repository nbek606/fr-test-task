export const state = ({
  list:{
    "/black-list": {
      title: 'Черный список'
    },
    "/survey": {
      title: 'Опрос'
    },
    "/survey/create": {
      title: 'Создать опрос'
    },
    "/users": {
      title: 'Пользователи'
    },
    "/call-center": {
      title: 'Колл-центер'
    },
   
  },
  header: []
})

export const getters = {
  getList: state => state.list,
}