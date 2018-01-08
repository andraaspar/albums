import { assign } from 'illa/ObjectUtil'
import { withInterface } from 'illa/Type'
import { ActionType } from './ActionType'
import { ModelListItem } from './ModelListItem'
import { TAction } from './TAction'

export interface State_Lists {
	readonly input?: string
	readonly isLoadingLists?: boolean
	readonly lists?: ReadonlyArray<ReadonlyArray<ModelListItem>>
	readonly tracks?: ReadonlyArray<ModelListItem>
	readonly error?: string
}

export function lists(state: State_Lists = { input: '' }, action: TAction): State_Lists {
	switch (action.type) {
		case ActionType.SetInput:
			return {
				...state,
				input: action.input,
			}
		case ActionType.FetchLists:
			return {
				...state,
				isLoadingLists: true,
				error: undefined,
				lists: undefined,
			}
		case ActionType.FetchListsSuccess:
			return {
				...state,
				isLoadingLists: false,
				lists: action.lists,
				tracks: action.tracks,
			}
		case ActionType.FetchListsError:
			return {
				...state,
				isLoadingLists: false,
				error: action.error,
			}
		default:
			return state
	}
}
