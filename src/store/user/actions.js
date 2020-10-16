import apiDispatcher from '@/helpers/api-dispatcher'
import User from '@/models/user'

const getUsers = (context, params) =>
  apiDispatcher(context, {
    resource: User,
    storeKey: 'users',
    loadingKey: 'usersLoading',
    action: 'index',
    metaKey: 'meta',
    params
  })

const createUser = (context, { user: resource }) =>
  apiDispatcher(context, {
    resource,
    storeKey: 'users',
    loadingKey: 'userSaveLoading',
    action: 'create'
  })

const updateUser = (context, { user: resource }) =>
  apiDispatcher(context, {
    resource,
    storeKey: 'users',
    loadingKey: 'userSaveLoading',
    action: 'update'
  })

const destroyUser = (context, { user: resource }) =>
  apiDispatcher(context, {
    resource,
    storeKey: 'users',
    loadingKey: 'usersLoading',
    action: 'destroy'
  })

const getUser = (context, params) =>
  apiDispatcher(context, {
    resource: User,
    storeKey: 'user',
    loadingKey: 'userLoading',
    action: 'show',
    params
  })

export default {
  getUsers,
  createUser,
  updateUser,
  getUser,
  destroyUser
}
