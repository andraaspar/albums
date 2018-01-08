import { ActionFetchLists, ActionFetchListsError, ActionFetchListsSuccess } from './ActionFetchLists'
import { ActionSetInput } from './ActionSetInput'

export type TAction = ActionSetInput
	| ActionFetchLists
	| ActionFetchListsSuccess
	| ActionFetchListsError
