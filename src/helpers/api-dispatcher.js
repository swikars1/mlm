import mutationTypes from './mutation-types'

const invalidPromise = value => value && value.then === 'function'

const apiDispatcher = (
  context,
  {
    storeKey,
    order,
    loadingKey,
    action,
    commitType,
    resource,
    metaKey,
    params,
    statusKey,
  }
) => {
  if (invalidPromise(resource[action])) {
    throw `No action found with ${resource}`
  }
  const mutationCommitType = commitType || action
  context.commit(mutationTypes.PENDING, { loadingKey, action, statusKey })
  return resource[action](params)
    .then(response => {
      let resourceData = response.data.data
      if (!resourceData) {
        throw 'response should be wrapped in data key'
      }
      context.commit(mutationTypes.SUCCESS, {
        resource,
        storeKey,
        order,
        metaKey,
        resourceData,
        responseHeaders: response.headers,
        action: mutationCommitType
      })
    })
    .catch(err => {
      console.error(err)
      context.commit(mutationTypes.FAILURE, { loadingKey, statusKey })
      throw err
    })
    .finally(() => {
      context.commit(mutationTypes.RESOLVE_PENDING, { loadingKey })
    })
}

export default apiDispatcher
