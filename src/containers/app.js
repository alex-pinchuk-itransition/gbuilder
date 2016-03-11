import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {select_tab, select_side, select_color} from '../actions'
import lang from '../state/translate'
import header from '../components/header'
import scene from '../components/scene'
import ControlPanel from '../components/control-panel'
import cube from '../cube'

const colors = [
	{id: 1, bg:  '#660000', hex: 0x660000},
	{id: 2, bg:  '#ff0000', hex: 0xff0000},
	{id: 3, bg:  '#006600', hex: 0x006600},
	{id: 4, bg:  '#00ff00', hex: 0x00ff00},
	{id: 5, bg:  '#000066', hex: 0x000066},
	{id: 6, bg:  '#0000ff', hex: 0x0000ff},
	{id: 7, bg:  '#666600', hex: 0x666600},
	{id: 8, bg:  '#ffff00', hex: 0xffff00},
	{id: 9, bg:  '#660066', hex: 0x660066},
	{id: 10, bg: '#ff00ff', hex: 0xff00ff},
	{id: 11, bg: '#006666', hex: 0x006666},
	{id: 12, bg: '#00ffff', hex: 0x00ffff}
];
class App extends Component {
	render() {
		const {dispatch, tabs, langs, sides} = this.props
		return (
			<div className='app-conteiner' >
				<ControlPanel
					tabs={tabs} sides={sides} lang={lang} colors={colors}
					onTabClick={id => dispatch(select_tab(id))}
					onSideClick={id => dispatch(select_side(id))}
					onColorClick={color => {
						dispatch(select_color(color));
						cube.set_colors(sides.map(side => side.selected ? color : side.color));
					}}
				/>
			</div>
		);
	}
}
export default connect(state => {return state;})(App)
