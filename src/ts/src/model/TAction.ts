import { ActionFetchLists, ActionFetchListsError, ActionFetchListsSuccess } from './ActionFetchLists'
import { ActionSetQuery } from './ActionSetInput'

export type TAction = ActionSetQuery
	| ActionFetchLists
	| ActionFetchListsSuccess
	| ActionFetchListsError
