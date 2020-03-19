import {SAVE_PERSON} from '../action_types'

export const createPerson = personObj => ({type:SAVE_PERSON,data:personObj})