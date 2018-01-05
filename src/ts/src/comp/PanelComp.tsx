import { Component, createElement, ReactNode } from 'react'

export interface PanelCompProps {
	_heading?: ReactNode
}
export interface PanelCompState { }

export class PanelComp extends Component<PanelCompProps, PanelCompState> {
	// constructor(props: PanelCompProps) {
	// 	super(props)
	// 	// this.state = {}
	// }
	// componentWillMount() {}
	// componentWillReceiveProps(nextProps: PanelCompProps) {}
	// shouldComponentUpdate(nextProps: PanelCompProps, nextState: PanelCompState): boolean {}
	// componentWillUpdate(nextProps: PanelCompProps, nextState: PanelCompState) {}
	render() {
		return (
			<div className='panel'>
				{this.props._heading &&
					<h2 className='panel-heading'>
						{this.props._heading}
					</h2>
				}
				{this.props.children}
			</div>
		)
	}
	// componentDidMount() {}
	// componentDidUpdate(prevProps: PanelCompProps, prevState: PanelCompState) {}
	// componentWillUnmount() {}
}
