export const SELECT_TAB = 'SELECT_TAB'
export const SELECT_VIEW = 'SELECT_VIEW'
export const SELECT_COLOR = 'SELECT_COLOR'
export const SELECT_LANG = 'SELECT_LANG'

export function select_tab(id) {
	return {type: SELECT_TAB, id};
}

export function select_side(side) {
	return {type: SELECT_VIEW, id};
}

export function select_color(color) {
	return {type: SELECT_COLOR, color};
}

export function select_color(lang) {
	return {type: SELECT_LANG, lang};
}

