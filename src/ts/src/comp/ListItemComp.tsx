import { Component, createElement, Fragment } from 'react'
import { ModelListItem } from '../model/ModelListItem'

export interface ListItemCompProps {
	_item: ModelListItem
}
export interface ListItemCompState { }

export class ListItemComp extends Component<ListItemCompProps, ListItemCompState> {
	// constructor(props: ListItemCompProps) {
	// 	super(props)
	// 	// this.state = {}
	// }
	// componentWillMount() {}
	// componentWillReceiveProps(nextProps: ListItemCompProps) {}
	// shouldonentUpdate(nextProps: ListItemCompProps, nextState: ListItemCompState): boolean {}
	// componentWillUpdate(nextProps: ListItemCompProps, nextState: ListItemCompState) {}
	render() {
		return (
			<a
				href={`https://open.spotify.com/search/${this.props._item.trackTitle ? `songs` : `albums`}/${encodeURIComponent(`${this.props._item.artistName}: ${this.props._item.albumTitle}` + (this.props._item.trackTitle ? `: ${this.props._item.trackTitle}` : ``))}`}
				target='_blank'
			>
				<span>{this.props._item.artistName}</span>
				{`: `}
				{this.props._item.trackTitle ?
					<Fragment>
						<strong>{this.props._item.trackTitle}</strong>
						{` `}
						<small>
							<em>
								{` on `}
								{this.props._item.albumTitle}
							</em>
						</small>
					</Fragment>
					:
					<strong>{this.props._item.albumTitle}</strong>
				}
			</a>
		)
	}
	// componentDidMount() {}
	// componentDidUpdate(prevProps: ListItemCompProps, prevState: ListItemCompState) {}
	// componentWillUnmount() {}
}
