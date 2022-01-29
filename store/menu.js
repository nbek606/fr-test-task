export const state = ({
    leftPanel: [
      {
        title: 'Опросы',
        icon: 'Survey',
        link: '/survey'
      },
      {
        title: 'Пользователи',
        icon: 'Users',
        link: '/users'
      },
      {
        title: 'Черные списки',
        icon: 'BlackList',
        link: '/black-list'
      },
      {
        title: 'Колл-центр',
        icon: 'Call',
        link: '/call-center'
      },
    ],
    header: []
})

export const getters = {
    header: state => state.header,
    leftPanel: state => state.leftPanel
}