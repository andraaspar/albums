import 'core-js/es6/map'
import 'core-js/es6/object'
import 'core-js/es6/promise'
import 'core-js/es6/set'
import 'core-js/es6/symbol'
import 'raf/polyfill'

import '../../scss/src/screen.scss'

import 'window-onerror-handler'

import { createElement } from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppComp } from './comp/AppComp'
import { store } from './model/store'

ReactDOM.render(
	<Provider store={store}>
		<AppComp />
	</Provider>,
	document.getElementById('app'),
)
