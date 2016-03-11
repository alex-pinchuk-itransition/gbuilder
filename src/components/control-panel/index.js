import React, {Component, PropTypes} from 'react'

export default class ControlPanel extends Component {
	render() {
		return (
			<div className='control-panel'>
				<div className='tabs'>
					{this.props.tabs.map(tab =>
						<div
							key={tab.id}
							className={tab.selected ? 'tab selected' : 'tab'}
							onClick={() => this.props.onTabClick(tab.id)} >
								{tab.name}
						</div>
					)}
				</div>
				<div className='controls'>
					{this.props.sides.map(side =>
						<div
							key={side.id}
							className={side.selected ? 'side selected' : 'side'}
							onClick={() => this.props.onSideClick(side.id)} >
								<span>{side.name}</span>
						</div>
					)}
				</div>
				<div className='nav-control'> </div>
				<div className='color-pik'>
					{this.props.colors.map(color =>
						<div
							key={color.id}
							style={{backgroundColor: color.bg}}
							onClick={() => this.props.onColorClick(color.hex)} >
						</div>
					)}
				</div>
			</div>
		);
	}
}
