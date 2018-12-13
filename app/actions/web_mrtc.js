// @flow
export const UPDATE_WEB_MRTC_STATE = 'UPDATE_WEB_MRTC_STATE';

export function update(newState) {
  return {
    type: UPDATE_WEB_MRTC_STATE,
    payload: newState
  };
}
