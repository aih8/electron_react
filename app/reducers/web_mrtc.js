// @flow
import { UPDATE_WEB_MRTC_STATE } from '../actions/web_mrtc';
import type { Action } from './types';

const initState: object = {
  status: 'hahah'
};

export default function counter(state: object = initState, action: Action) {
  switch (action.type) {
    case UPDATE_WEB_MRTC_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
