import mutationTypes from './mutation-types'

const actionMapper = {
  index: (_state, data, resource) => {
    return data.map(obj => new resource(obj))
  },
  update: (state, data, resource) => {
    const newState = state.filter(obj => obj.id !== data.id)
    return [new resource.constructor(data), ...newState]
  },
  updateAll: (_state, data, resource) =>
    data.map(o => new resource.constructor(o)),
  singleResourceUpdate: (_state, data, resource) => {
    return new resource.constructor(data)
  },
  destroy: (state, data) => {
    const newState = state.filter(obj => obj.id !== data.id)
    return newState
  },
  destroyAll: () => {
    return []
  },
  create: (state, data, resource) => [new resource.constructor(data), ...state],
  show: (_state, data, resource) => new resource(data),
  complete: (_state, data, resource) => new resource.constructor(data),
}

const sharedMutations = {
  [mutationTypes.SUCCESS](
    state,
    {
      resourceData: data,
      responseHeaders,
      storeKey,
      action,
      order,
      resource,
      metaKey
    }
  ) {
    let newStoreData = actionMapper[action]
      ? actionMapper[action](state[storeKey], data, resource)
      : data
    let storeOrder = order || 'asc'

    if (
      newStoreData &&
      newStoreData.constructor.name === 'Array' &&
      storeOrder === 'desc'
    ) {
      newStoreData = newStoreData.reverse()
    }

    state[storeKey] = newStoreData
    if (state[metaKey]) {
      state[metaKey] = responseHeaders
    }
  },
  [mutationTypes.PENDING](state, { loadingKey, statusKey }) {
    if (typeof state[loadingKey] === 'boolean') {
      state[loadingKey] = true
    }
    if (state[statusKey]) {
      state[statusKey] = mutationTypes.PENDING
    }
  },
  [mutationTypes.FAILURE](state, { loadingKey, statusKey }) {
    if (typeof state[loadingKey] === 'boolean') {
      state[loadingKey] = false
    }
    if (state[statusKey]) {
      state[statusKey] = mutationTypes.FAILURE
    }
  },
  [mutationTypes.RESOLVE_PENDING](state, { loadingKey }) {
    if (state[loadingKey]) {
      state[loadingKey] = false
    }
  }
}

export default sharedMutations
