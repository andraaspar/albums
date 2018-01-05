import { Component, createElement } from 'react'
import { Icon } from '../model/Icon'

export interface IconCompProps {
	_icon: Icon
	_rotate?: boolean
	_pulse?: boolean
}
export interface IconCompState { }

export class IconComp extends Component<IconCompProps, IconCompState> {
	// constructor(props: IconCompProps) {
	// 	super(props)
	// 	// this.state = {}
	// }
	// componentWillMount() {}
	// componentWillReceiveProps(nextProps: IconCompProps) {}
	// shouldonentUpdate(nextProps: IconCompProps, nextState: IconCompState): boolean {}
	// componentWillUpdate(nextProps: IconCompProps, nextState: IconCompState) {}
	render() {
		return (
			<i className={`fa fa-${this.props._icon} ${this.props._pulse ? `fa-pulse fa-3x fa-fw` : ``} ${this.props._rotate ? `fa-spin fa-3x fa-fw` : ``}`} />
		)
	}
	// componentDidMount() {}
	// componentDidUpdate(prevProps: IconCompProps, prevState: IconCompState) {}
	// componentWillUnmount() {}
}
