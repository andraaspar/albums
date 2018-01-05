import { assign } from 'illa/ObjectUtil'
import { ModelListItem } from './ModelListItem'

export interface StateSchema {
	input?: string
	isLoadingLists?: boolean
	lists?: ModelListItem[][]
	tracks?: ModelListItem[]
	error?: any
}

export interface State extends StateSchema {
	input: string
}

export function createState(o: StateSchema): State {
	return assign({
		input: 'Initial input',
	}, o)
}
