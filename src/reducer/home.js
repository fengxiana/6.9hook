import { 
  FETCH_HOME_DATA,
  FETCH_HOME_TYPE,
  FETCH_HOME_ADD,
  FETCH_HOME_UPDATE,
  FETCH_HOME_DELETE
} from '@/constants/actionTypes'

const defaultState = {
  data: [],
  modalType: null
}

export default function homeReducer (state = defaultState, action) {
  switch (action.type) {
    case FETCH_HOME_DATA:
      return { ...state, data: action.payload.users }

    case FETCH_HOME_TYPE:
      return { ...state, modalType: action.payload }

    case FETCH_HOME_ADD:
      return action.payload

    case FETCH_HOME_UPDATE:
      return action.payload

    case FETCH_HOME_DELETE:
      return action.payload
      
    default:
      return state
  }
}