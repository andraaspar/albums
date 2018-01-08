import { Component, createElement, Fragment } from 'react'
import { connect, DispatchProp } from 'react-redux'
import { Dispatch } from 'redux'
import { createActionFetchLists } from '../model/ActionFetchLists'
import { createActionSetInput } from '../model/ActionSetInput'
import { Icon } from '../model/Icon'
import { ModelListItem } from '../model/ModelListItem'
import { State } from '../model/State'
import { ColumnComp } from './ColumnComp'
import { IconComp } from './IconComp'
import { ListItemComp } from './ListItemComp'
import { PanelBlockComp } from './PanelBlockComp'
import { PanelComp } from './PanelComp'

export interface AppCompPropsFromStore {
	input: string
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
					<div className='columns'>
						{this.props.error &&
							<ColumnComp _isFull>
								<article className='message is-danger'>
									<div className='message-body' style={{ whiteSpace: `pre-wrap` }}>
										{this.props.error}
									</div>
								</article>
							</ColumnComp>
						}
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
									this.props.tracks.map((track, index) =>
										<PanelBlockComp key={index}>
											<ListItemComp _item={track} />
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
										this.props.lists[stars].map((track, index) =>
											<PanelBlockComp key={index}>
												<ListItemComp _item={track} />
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
	({ lists: { input, isLoadingLists, lists, tracks, error } }, ownProps) => ({
		input,
		isLoadingLists,
		lists: lists ? lists.map(filterItems) : undefined,
		tracks: filterItems(tracks),
		error,
	}),
	(dispatch: Dispatch<State>, ownProps) => ({
		setInput: input => dispatch(createActionSetInput({ input })),
		loadLists: () => dispatch(createActionFetchLists({}))
	}),
)(AppCompPure)

export function filterItems(items: ReadonlyArray<ModelListItem>) {
	return items ? items.filter(track => track.albumTitle || track.artistName || track.trackTitle) : undefined
}

function makeStars(count: number, max: number): string {
	let result = ``
	for (let i = 0; i < count; i++) result += '\u2605'
	while (result.length < max) result += '\u2606'
	return result
}
