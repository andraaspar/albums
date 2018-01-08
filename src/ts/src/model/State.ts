import { combineReducers } from 'redux'
import { lists, State_Lists } from 'src/ts/src/model/State_Lists'

export interface State {
	readonly lists: State_Lists
}

export const rootReducer = combineReducers<State>({
	lists,
})
