import * as types from "./actionTypes";
import * as recordApi from "../../api/recordApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadRecordSuccess(records) {
  return { type: types.LOAD_RECORDS_SUCCESS, records };
}

export function createRecordSuccess(record) {
  return { type: types.CREATE_RECORD_SUCCESS, record };
}

export function updateRecordSuccess(record) {
  return { type: types.UPDATE_RECORD_SUCCESS, record };
}

export function deleteRecordOptimistic(record) {
  return { type: types.DELETE_RECORD_OPTIMISTIC, record };
}

export function searchRecordSuccess(val){
  return {type: types.SEARCH_RECORD_SUCCESS,val}
}

export function loadRecords() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return recordApi
      .getRecords()
      .then(records => {
        dispatch(loadRecordSuccess(records));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveRecord(record) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return recordApi
      .saveRecord(record)
      .then(savedRecord => {
        record.id
          ? dispatch(updateRecordSuccess(savedRecord))
          : dispatch(createRecordSuccess(savedRecord));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteRecord(record) {
  return function(dispatch) {
    dispatch(deleteRecordOptimistic(record));
    return recordApi.deleteRecord(record.id);
  };
}

export function searchRecord(searchval){
  return function(dispatch){
    dispatch(searchRecordSuccess(searchval));
  };
}
