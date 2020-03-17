import {connect} from 'react-redux'
import Person from '../components/person'
import {createAddPersonAction} from '../redux/actions/person_action'

export default connect(
  (state)=>({
    persons:state.person,
    count:state.count
  }),
  {
    add:createAddPersonAction
  }
)(Person)