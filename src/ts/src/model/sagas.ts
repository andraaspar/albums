import axios from 'axios'
import { uuid } from 'illa/StringUtil'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ActionFetchLists, createActionFetchListsError, createActionFetchListsSuccess } from './ActionFetchLists'
import { ActionType } from './ActionType'
import { ModelListItem } from './ModelListItem'

function loadJson<T = {}>(url: string): Promise<T> {
	return axios.get<T>(url)
		.then(_ => _.data)
}

const ratingFileNames = [
	'tracks.json',
	'albums-0-of-3.json',
	'albums-1-of-3.json',
	'albums-2-of-3.json',
	'albums-3-of-3.json',
]

function* fetchLists(action: ActionFetchLists) {
	try {
		const response: { files: { [_: string]: { raw_url: string } } } = yield call(loadJson, `https://api.github.com/gists/9c9728852c2a187b8187b6753c12210e`)
		const [tracks, ...lists]: ModelListItem[][] = yield all(ratingFileNames.map((ratingFileName) => call(loadJson, response.files[ratingFileName].raw_url)))
		yield put(createActionFetchListsSuccess({ lists: lists.map(list => list.map(addId)), tracks: tracks.map(addId) }))
	} catch (e) {
		yield put(createActionFetchListsError({ error: e + '' }))
	}
}

export function* rootSaga() {
	yield takeLatest(ActionType.FetchLists, fetchLists)
}

function addId(item: ModelListItem): ModelListItem {
	return {
		...item,
		id: item.id || uuid(),
	}
}
