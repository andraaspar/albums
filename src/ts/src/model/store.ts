import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas'
import { rootReducer } from './State'
import { logger } from 'redux-logger'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
	rootReducer,
	applyMiddleware(
		sagaMiddleware,
		logger,
	),
)

sagaMiddleware.run(rootSaga)
