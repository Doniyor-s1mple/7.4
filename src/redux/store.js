import { configureStore } from "@reduxjs/toolkit"
import XodimlarReducer from '../redux/XodimlarReducer'
import LavozimReducer from '../redux/LavozimReducer'

export default configureStore({
    reducer: { XodimlarReducer, LavozimReducer }
})