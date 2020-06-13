import { post } from '@/utils/request'
import api from '@/services/api'
import { FETCH_REGISTE_INTO } from '@/constants/actionTypes'

export function myRegiste (options) {
  return {
    type: FETCH_REGISTE_INTO,
    payload: post(api.registeApi, options)
  }
}