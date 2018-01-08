import { assign } from 'illa/ObjectUtil'
import { Action } from './Action'
import { ActionType } from './ActionType'

export interface ActionSetQuerySchema {
	input: string
}

export interface ActionSetQuery extends Action, ActionSetQuerySchema {
	type: ActionType.SetQuery
}

export function createActionSetQuery(o: ActionSetQuerySchema): ActionSetQuery {
	return assign({
		type: ActionType.SetQuery as ActionType.SetQuery,
	}, o)
}
