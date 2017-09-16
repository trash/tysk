import * as _ from 'lodash';
import * as Immutable from 'immutable';
import {createStore} from 'redux';

import * as actionTypes from './actions/types';
import {
    UpdateTab
} from './actions';

import {Tab} from '../models/common';

type ReducerAction =
    UpdateTab
;

export interface StoreState {
    tab: Tab;
}

const initialState: StoreState = {
    tab: 'about'
};

function mainReducer(
    previousState = initialState,
    action: ReducerAction
) {
    const newState = _.extend({}, previousState);

    switch (action.type) {
        case actionTypes.UPDATE_TAB:
            newState.tab = action.tab;
            break;
    }

    return newState;
}

export const store = createStore<StoreState>(mainReducer);