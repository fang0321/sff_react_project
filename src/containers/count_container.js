import Count from '../components/count'
import {connect} from 'react-redux'
import {createDecrementAction,createIncrementAction} from '../redux/actions/count_action'

export default connect(
  (state)=>({number:state.count,persons:state.person.length}),
  {
    increment:createIncrementAction,
    decrement:createDecrementAction
  }
)(Count)