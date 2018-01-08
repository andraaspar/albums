import { classes } from 'illa/MithrilUtil'
import { Component, createElement, ReactNode } from 'react'

export interface FieldCompProps {
	_iconLeft?: ReactNode
	_iconRight?: ReactNode
}
export interface FieldCompState { }

export class FieldComp extends Component<FieldCompProps, FieldCompState> {
	// constructor(props: FieldCompProps) {
	// 	super(props)
	// 	// this.state = {}
	// }
	// componentWillMount() {}
	// componentWillReceiveProps(nextProps: FieldCompProps) {}
	// shouldonentUpdate(nextProps: FieldCompProps, nextState: FieldCompState): boolean {}
	// componentWillUpdate(nextProps: FieldCompProps, nextState: FieldCompState) {}
	render() {
		return (
			<div className='field'>
				<p className={classes(
					`control`,
					this.props._iconLeft && `has-icons-left`,
					this.props._iconRight && `has-icons-right`,
				)}>
					{this.props.children}
					{this.props._iconLeft &&
						<span className='icon is-small is-left'>
							{this.props._iconLeft}
						</span>
					}
					{this.props._iconRight &&
						<span className='icon is-small is-right'>
							{this.props._iconRight}
						</span>
					}
				</p>
			</div>
		)
	}
	// componentDidMount() {}
	// componentDidUpdate(prevProps: FieldCompProps, prevState: FieldCompState) {}
	// componentWillUnmount() {}
}
