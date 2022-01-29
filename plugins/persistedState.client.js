import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    paths: [
      'respondent.list',
      'respondent.lastId'
    ]
  })(store)
}
