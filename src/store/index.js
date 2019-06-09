import { init } from '@rematch/core'
import createRematchPersist from '@rematch/persist'

import * as models from './models'

const persistPlugin = createRematchPersist({
  whitelist: ['user'],
  throttle: 5000,
  version: 1,
})

const store = init({
  models,
  plugins: [persistPlugin],
})

export default store
