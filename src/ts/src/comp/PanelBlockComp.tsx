import { Component, createElement, Fragment, ReactNode } from 'react'

export interface PanelBlockCompProps {
	_icon?: ReactNode
}
export interface PanelBlockCompState { }

export class PanelBlockComp extends Component<PanelBlockCompProps, PanelBlockCompState> {
	// constructor(props: PanelBlockCompProps) {
	// 	super(props)
	// 	// this.state = {}
	// }
	// componentWillMount() {}
	// componentWillReceiveProps(nextProps: PanelBlockCompProps) {}
	// shouldonentUpdate(nextProps: PanelBlockCompProps, nextState: PanelBlockCompState): boolean {}
	// componentWillUpdate(nextProps: PanelBlockCompProps, nextState: PanelBlockCompState) {}
	render() {
		return (
			<div className='panel-block'>
				{this.props._icon &&
					<Fragment>
						<span className='panel-icon'>
							{this.props._icon}
						</span>
						{` `}
					</Fragment>
				}
				{this.props.children}
			</div>
		)
	}
	// componentDidMount() {}
	// componentDidUpdate(prevProps: PanelBlockCompProps, prevState: PanelBlockCompState) {}
	// componentWillUnmount() {}
}
