import { FETCH_REGISTE_INTO } from '@/constants/actionTypes'

const defaultState = {
  data: []
}

export default function registeReducer (state = defaultState, action) {
  switch (action.type) {
    case FETCH_REGISTE_INTO:
      return action.payload
    default:
      return state
  }
}