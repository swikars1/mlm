const users = state => state.users

const usersMeta = state => state.meta

const user = state => state.user

const usersLoading = state => state.usersLoading

const userLoading = state => state.userLoading

const userSaveLoading = state => state.userSaveLoading

export default {
  user,
  users,
  usersLoading,
  userLoading,
  userSaveLoading,
  usersMeta
}
