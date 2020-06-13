import { post } from '@/utils/request'
import api from '@/services/api'
import { FETCH_LOGIN_INTO } from '@/constants/actionTypes'

export function myLogin (options) {
  return {
    type: FETCH_LOGIN_INTO,
    payload: post(api.loginApi, options)
  }
}