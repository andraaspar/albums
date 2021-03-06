import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas'
import { rootReducer } from './State'

const sagaMiddleware = createSagaMiddleware()
const middleware = [
	sagaMiddleware,
	process.env.NODE_ENV !== 'production' && createLogger({
		collapsed: true,
		timestamp: false,
	}),
].filter(Boolean)

export const store = createStore(
	rootReducer,
	applyMiddleware(...middleware),
)

sagaMiddleware.run(rootSaga)
