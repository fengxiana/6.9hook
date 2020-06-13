import { FETCH_LOGIN_INTO } from '@/constants/actionTypes'

const defaultState = {
  data: []
}

export default function loginReducer (state = defaultState, action) {
  switch (action.type) {
    case FETCH_LOGIN_INTO:
      return action.payload
    default:
      return state
  }
}