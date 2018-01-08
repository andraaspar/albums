import { escapeRegExp } from 'illa/StringUtil'
import { Component, createElement, Fragment } from 'react'
import { connect, DispatchProp } from 'react-redux'
import { Dispatch } from 'redux'
import { createActionFetchLists } from '../model/ActionFetchLists'
import { createActionSetQuery } from '../model/ActionSetInput'
import { Icon } from '../model/Icon'
import { ModelListItem } from '../model/ModelListItem'
import { State } from '../model/State'
import { ColumnComp } from './ColumnComp'
import { FieldComp } from './FieldComp'
import { IconComp } from './IconComp'
import { InputComp } from './InputComp'
import { ListItemComp } from './ListItemComp'
import { PanelBlockComp } from './PanelBlockComp'
import { PanelComp } from './PanelComp'

export interface AppCompPropsFromStore {
	query: string
	isLoadingLists: boolean
	lists: ModelListItem[][]
	tracks: ModelListItem[]
	error: string
}
export interface AppCompPropsDispatch {
	setInput(v: string): void
	loadLists(): void
}
export interface AppCompPropsOwn { }
export interface AppCompProps extends AppCompPropsOwn, AppCompPropsFromStore, AppCompPropsDispatch, DispatchProp<State> { }
export interface AppCompState { }

class AppCompPure extends Component<AppCompProps, AppCompState> {
	// constructor(props: AppCompProps) {
	// 	super(props)
	// 	// this.state = {}
	// }
	// componentWillMount() {}
	// componentWillReceiveProps(nextProps: AppCompProps) {}
	// shouldComponentUpdate(nextProps: AppCompProps, nextState: AppCompState): boolean {}
	// componentWillUpdate(nextProps: AppCompProps, nextState: AppCompState) {}
	render() {
		return (
			<Fragment>
				<div className='navbar is-dark'>
					<div className='navbar-brand'>
						<h1 className='navbar-item'>
							{`My favourite albums & tracks`}
						</h1>
					</div>
				</div>
				<div className='container is-fluid'>
					<FieldComp
						_iconLeft={<IconComp _icon={Icon.search} />}
					>
						<InputComp
							value={this.props.query}
							onChange={e => this.props.setInput(e.target.value)}
							placeholder={`Filter...`}
						/>
					</FieldComp>
					{this.props.error &&
						<article className='message is-danger'>
							<div className='message-body' style={{ whiteSpace: `pre-wrap` }}>
								{this.props.error}
							</div>
						</article>
					}
					<div className='columns'>
						<ColumnComp>
							<PanelComp _heading={`Favourite tracks`}>
								{this.props.isLoadingLists &&
									<PanelBlockComp
										_icon={<IconComp _icon={Icon.spinner} _pulse />}
									>
										<em>{`Loading...`}</em>
									</PanelBlockComp>
								}
								{this.props.tracks &&
									this.props.tracks.map((item, index) =>
										<PanelBlockComp key={item.id}>
											<ListItemComp _item={item} />
										</PanelBlockComp>
									)
								}
							</PanelComp>
						</ColumnComp>
						{[3, 2, 1, 0].map(stars =>
							<ColumnComp key={stars}>
								<PanelComp _heading={`${makeStars(stars, 3)} albums`}>
									{this.props.isLoadingLists &&
										<PanelBlockComp
											_icon={<IconComp _icon={Icon.spinner} _pulse />}
										>
											<em>{`Loading...`}</em>
										</PanelBlockComp>
									}
									{this.props.lists && this.props.lists[stars] &&
										this.props.lists[stars].map((item, index) =>
											<PanelBlockComp key={item.id}>
												<ListItemComp _item={item} />
											</PanelBlockComp>
										)
									}
								</PanelComp>
							</ColumnComp>
						)}
					</div>
				</div>
			</Fragment>
		)
	}
	componentDidMount() {
		this.props.loadLists()
	}
	// componentDidUpdate(prevProps: AppCompProps, prevState: AppCompState) {}
	// componentWillUnmount() {}
}

export const AppComp = connect<AppCompPropsFromStore, AppCompPropsDispatch, AppCompPropsOwn, State>(
	({ lists: { query, isLoadingLists, lists, tracks, error } }, ownProps) => ({
		query,
		isLoadingLists,
		lists: lists ? lists.map(_ => filterItems(_, query)) : undefined,
		tracks: filterItems(tracks, query),
		error,
	}),
	(dispatch: Dispatch<State>, ownProps) => ({
		setInput: input => dispatch(createActionSetQuery({ input })),
		loadLists: () => dispatch(createActionFetchLists({}))
	}),
)(AppCompPure)

function itemHash(item: ModelListItem) {
	return `${item.artistName || ''} ${item.albumTitle || ''} ${item.trackTitle || ''}`
}

function filterItems(items: ReadonlyArray<ModelListItem>, query: string) {
	if (!items) return undefined
	const queryRe = query && query.trim() ? new RegExp(escapeRegExp(query), `i`) : undefined
	return items
		.filter(track => {
			const isValid = track.albumTitle || track.artistName || track.trackTitle
			const matchesQuery = !queryRe || queryRe.test(itemHash(track))
			return isValid && matchesQuery
		})
}

function makeStars(count: number, max: number): string {
	let result = ``
	for (let i = 0; i < count; i++) result += '\u2605'
	while (result.length < max) result += '\u2606'
	return result
}
