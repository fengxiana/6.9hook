import { post, get } from '@/utils/request'
import api from '@/services/api'
import { 
  FETCH_HOME_DATA,
  FETCH_HOME_TYPE,
  FETCH_HOME_ADD,
  FETCH_HOME_UPDATE,
  FETCH_HOME_DELETE
} from '@/constants/actionTypes'

// 列表数据
export function homeData () {
  return {
    type: FETCH_HOME_DATA,
    payload: get(api.homeDataApi)
  }
}

// 区分添加修改
export function homeType (options) {
  return {
    type: FETCH_HOME_TYPE,
    payload: options
  }
}

//添加
export function homeAdd (options) {
  return {
    type: FETCH_HOME_ADD,
    payload: post(api.homeAddApi, options)
  }
}

//修改
export function homeUpdate (options) {
  return {
    type: FETCH_HOME_UPDATE,
    payload: post(api.homeUpdateApi, options)
  }
}

//删除
export function homeDelte (options) {
  return {
    type: FETCH_HOME_DELETE,
    payload: post(api.homeDeleteApi, options)
  }
}

