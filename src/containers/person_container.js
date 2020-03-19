import Person from '../components/person'
import {connect} from 'react-redux'
import {createPerson} from '../redux/actions/person_action'

export default connect(
  (state)=>({persons:state.person,count:state.count}),
  {addPerson:createPerson}
)(Person)