import { configureStore } from '@reduxjs/toolkit'
import resreducer from './res'
export default configureStore({
  reducer: {
    res:resreducer

  }
})