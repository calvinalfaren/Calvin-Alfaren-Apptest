import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import Contact from './Contact'

// This state is common to all the "user" module, and can be modified by any "user" reducers
const sliceInitialState = {
  contact: {},
  loading:false,
  error: null
}

export default buildSlice('contact', [Contact], sliceInitialState).reducer
