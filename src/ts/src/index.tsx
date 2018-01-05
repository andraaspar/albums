import 'core-js/es6/map'
import 'core-js/es6/set'
import { createElement } from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'window-onerror-handler'
import '../../scss/src/screen.scss'
import { AppComp } from './comp/AppComp'
import { store } from './model/store'

ReactDOM.render(
	<Provider store={store}>
		<AppComp />
	</Provider>,
	document.getElementById('app'),
)
