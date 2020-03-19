import Count from '../components/count'
import {connect} from 'react-redux'
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementDelayAction
}
from '../redux/actions/count_action'
export default connect(
  state => ({num:state.count,persons:state.person.length}),
  {
    in:createIncrementAction,
    de:createDecrementAction,
    inDelay:createIncrementDelayAction
  }
)(Count)