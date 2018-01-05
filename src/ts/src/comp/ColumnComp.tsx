import { classes } from 'illa/MithrilUtil'
import { Component, createElement } from 'react'

export interface ColumnCompProps {
	_isFull?: boolean
}
export interface ColumnCompState { }

export class ColumnComp extends Component<ColumnCompProps, ColumnCompState> {
	// constructor(props: ColumnCompProps) {
	// 	super(props)
	// 	// this.state = {}
	// }
	// componentWillMount() {}
	// componentWillReceiveProps(nextProps: ColumnCompProps) {}
	// shouldonentUpdate(nextProps: ColumnCompProps, nextState: ColumnCompState): boolean {}
	// componentWillUpdate(nextProps: ColumnCompProps, nextState: ColumnCompState) {}
	render() {
		return (
			<div className={classes(
				`column`,
				this.props._isFull && `is-full`,
			)}>
				{this.props.children}
			</div>
		)
	}
	// componentDidMount() {}
	// componentDidUpdate(prevProps: ColumnCompProps, prevState: ColumnCompState) {}
	// componentWillUnmount() {}
}
