import Count from '../components/count'
import {connect} from 'react-redux'
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementDelayAction
}
from '../redux/count_action'
export default connect(
  s => ({num:s}),
  {
    in:createIncrementAction,
    de:createDecrementAction,
    inDelay:createIncrementDelayAction
  }
)(Count)