export const state = ({
  currentUser: {
    img: 'https://cdnn.1prime.ru/images/83206/75/832067535.jpg',
    name: 'Илон Маск',
    position: 'Директор'
  }
})

export const getters = {
  getCurrentUser: state => state.currentUser
}