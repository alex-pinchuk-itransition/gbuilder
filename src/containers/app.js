import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {select_tab, select_side, select_color} from '../actions'
import lang from '../state/translate'
import header from '../components/header'
import scene from '../components/scene'
import control_panel from '../components/control-panel'

class app extends Component {
	render() {
		const {tabs, langs, sides} = this.props
		return (
			<div className='app-conteiner' >
				<header headers={langs} />
				<scene />
				<control_panel tabs={tabs} />
			</div>
		);
	}
}
export default connect(state => {
	return state;}
)(App)
