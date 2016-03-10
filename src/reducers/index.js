import {combineReducers} from 'redux'
import {lang} from '../translate'

import {
	SELECT_TAB, SELECT_VIEW, SELECT_COLOR, select_tab, select_side, select_color
} from '../actions'

function tabs(state = [
	{id: 0, name: 'Colors & Materials', selected: true},
	{id: 1, name: 'Graphics', selected: false},
	{id: 2, name: 'Text', selected: false},
], action) {
	switch(action.type) {
		case SELECT_TAB: return state.map(tab => select_item(tab, action));
		default: return state;
	}
}

function sides(state = [
	{id: 0, color: '#ffeedd', name: 'Front', selected: true},
	{id: 1, color: '#ffeedd', name: 'Back', selected: false},
	{id: 2, color: '#ffeedd', name: 'Left', selected: false},
	{id: 3, color: '#ffeedd', name: 'Right', selected: false},
	{id: 4, color: '#ffeedd', name: 'Top', selected: false},
	{id: 5, color: '#ffeedd', name: 'Bottom', selected: false},
], action) {
	switch(action.type) {
		case SELECT_VIEW: return state.map(side => select_item(side, action));
		case SELECT_COLOR: return state.map(side => set_side_color(side, action));
		default: return state;
	}
}

const reducers = combineReducers({tabs, sides});

export default reducers;

function select_item(item, action) {
	if(item.id === action.id) {
		return Object.assign({}, item, {selected: true});
	} else {
		return Object.assign({}, item, {selected: false});
	}
}

function set_side_color(item, action) {
	if(item.selected) {
		return Object.assign({}, item, {color: action.color});
	} else {
		return item;
	}
}

