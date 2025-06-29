import Header from '../components/Header'
import {connect} from 'react-redux'
const mapStateToProps=state=>({
    data:state.cardItems
})
// eslint-disable-next-line no-unused-vars
const mapDispatchToProps=dispatch=>({
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)
// export default Home;