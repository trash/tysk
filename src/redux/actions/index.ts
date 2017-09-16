import * as types from './types';
import {Tab} from '../../models/common';

export interface UpdateTab {
    type: types.UPDATE_TAB;
    tab: Tab;
}

export function updateTab(tab: Tab): UpdateTab {
    return {
        tab,
        type: types.UPDATE_TAB
    }
}