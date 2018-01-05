import { assign } from 'illa/ObjectUtil'
import { Action } from './Action'
import { ActionType } from './ActionType'
import { ModelListItem } from './ModelListItem'

export interface ActionFetchListsSchema {
	
}

export interface ActionFetchLists extends Action, ActionFetchListsSchema {
	type: ActionType.FetchLists
	
}

export function createActionFetchLists(o: ActionFetchListsSchema): ActionFetchLists {
	return assign({
		type: ActionType.FetchLists as ActionType.FetchLists,
	}, o)
}

export interface ActionFetchListsSuccessSchema {
	lists: ModelListItem[][]
	tracks: ModelListItem[]
}

export interface ActionFetchListsSuccess extends Action, ActionFetchListsSuccessSchema {
	type: ActionType.FetchListsSuccess
	
}

export function createActionFetchListsSuccess(o: ActionFetchListsSuccessSchema): ActionFetchListsSuccess {
	return assign({
		type: ActionType.FetchListsSuccess as ActionType.FetchListsSuccess,
	}, o)
}

export interface ActionFetchListsErrorSchema {
	error: any
}

export interface ActionFetchListsError extends Action, ActionFetchListsErrorSchema {
	type: ActionType.FetchListsError
	
}

export function createActionFetchListsError(o: ActionFetchListsErrorSchema): ActionFetchListsError {
	return assign({
		type: ActionType.FetchListsError as ActionType.FetchListsError,
	}, o)
}
