import { assign } from 'illa/ObjectUtil'
import { withInterface } from 'illa/Type'
import { ActionFetchLists, ActionFetchListsError, ActionFetchListsSuccess } from './ActionFetchLists'
import { ActionSetInput } from './ActionSetInput'
import { ActionType } from './ActionType'
import { createState, State } from './State'

type TAction = ActionSetInput
	| ActionFetchLists
	| ActionFetchListsSuccess
	| ActionFetchListsError

export function rootReducer(state = createState({}), action: TAction): State {
	switch (action.type) {
		case ActionType.SetInput:
			return assign({}, state, {
				input: action.input,
			})
		case ActionType.FetchLists:
			return assign({}, state, withInterface<Partial<State>>({
				isLoadingLists: true,
				error: null,
				lists: null,
			}))
		case ActionType.FetchListsSuccess:
			return assign({}, state, withInterface<Partial<State>>({
				isLoadingLists: false,
				lists: action.lists,
				tracks: action.tracks,
			}))
		case ActionType.FetchListsError:
			return assign({}, state, withInterface<Partial<State>>({
				isLoadingLists: false,
				error: action.error,
			}))
		default:
			return state
	}
}
