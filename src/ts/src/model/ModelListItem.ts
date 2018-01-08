import { assign } from 'illa/ObjectUtil'

export interface ModelListItemSchema {
	id: string
	artistName: string
	albumTitle: string
	trackTitle?: string
}

export interface ModelListItem extends ModelListItemSchema {

}

export function createModelListItem(o: ModelListItemSchema): ModelListItem {
	return assign({}, o)
}
