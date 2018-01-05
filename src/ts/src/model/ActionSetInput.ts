import { assign } from 'illa/ObjectUtil'
import { Action } from './Action'
import { ActionType } from './ActionType'

export interface ActionSetInputSchema {
	input: string
}

export interface ActionSetInput extends Action, ActionSetInputSchema {
	type: ActionType.SetInput
}

export function createActionSetInput(o: ActionSetInputSchema): ActionSetInput {
	return assign({
		type: ActionType.SetInput as ActionType.SetInput,
	}, o)
}
