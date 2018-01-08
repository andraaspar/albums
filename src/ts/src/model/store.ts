import { applyMiddleware, createStore } from 'redux'
import { logger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas'
import { rootReducer } from './State'

const sagaMiddleware = createSagaMiddleware()
const middleware = [
	sagaMiddleware,
	process.env.NODE_ENV !== 'production' && logger,
].filter(_ => Boolean(_))

export const store = createStore(
	rootReducer,
	applyMiddleware(...middleware),
)

sagaMiddleware.run(rootSaga)
