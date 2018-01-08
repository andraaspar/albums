import { classes } from 'illa/MithrilUtil'
import { Component, createElement, InputHTMLAttributes } from 'react'

export interface InputCompProps extends InputHTMLAttributes<HTMLInputElement> {

}
export interface InputCompState { }

export class InputComp extends Component<InputCompProps, InputCompState> {
	// constructor(props: InputCompProps) {
	// 	super(props)
	// 	// this.state = {}
	// }
	// componentWillMount() {}
	// componentWillReceiveProps(nextProps: InputCompProps) {}
	// shouldonentUpdate(nextProps: InputCompProps, nextState: InputCompState): boolean {}
	// componentWillUpdate(nextProps: InputCompProps, nextState: InputCompState) {}
	render() {
		const { className, ...otherProps } = this.props
		return (
			<input
				className={classes(
					`input`,
					className,
				)}
				{...otherProps}
			/>
		)
	}
	// componentDidMount() {}
	// componentDidUpdate(prevProps: InputCompProps, prevState: InputCompState) {}
	// componentWillUnmount() {}
}
