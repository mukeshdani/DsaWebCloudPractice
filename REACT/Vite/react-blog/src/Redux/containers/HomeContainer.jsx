import Home from '../components/Home'
import {connect} from 'react-redux'
// import {addToCart} from '../service/actions/actions'

import {addToCart} from '../services/Actions/actions'

// eslint-disable-next-line no-unused-vars
const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;