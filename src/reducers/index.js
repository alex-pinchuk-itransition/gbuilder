import {combineReducers} from 'redux'
import langs_state from '../state/translate'
import tabs_state from '../state/tabs'
import sides_state from '../state/sides'
import {
	SELECT_TAB, SELECT_VIEW, SELECT_COLOR, SELECT_LANG,
	select_tab, select_side, select_color, select_lang
} from '../actions'

function tabs(state = tabs_state, action) {
	switch(action.type) {
		case SELECT_TAB: return state.map(tab => select_item(tab, action));
		default: return state;
	}
}

function sides(state = sides_state, action) {
	switch(action.type) {
		case SELECT_VIEW: return state.map(side => select_item(side, action));
		case SELECT_COLOR: return state.map(side => set_side_color(side, action));
		default: return state;
	}
}

function translate(state = langs_state, action) {
	switch(action.type) {
		case SELECT_LANG: return langs_state[action.lang];
		default: return langs_state['en'];
	}
}

const reducers = combineReducers({tabs, sides, translate});

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

