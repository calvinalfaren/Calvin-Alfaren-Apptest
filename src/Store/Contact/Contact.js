import {
    buildAsyncState,
    buildAsyncReducers,
    buildAsyncActions,
  } from '@thecodingmachine/redux-toolkit-wrapper'
  //import GetContact from '@/Service/Contact/GetContact'
  import GetContact from '../../Services/Contact/GetContact'
  export default {
    initialState: {},
    action: buildAsyncActions('user/getContact', GetContact),
    reducers: {...buildAsyncReducers({
      errorKey: 'error',
      loadingKey: 'loading'
      }),
      fulfilled: (state, { payload, type }) => {
      // console.log("action get kontak msg",payload)
      state.contact = payload.data
      state.error = null
      state.loading = false
  
    },
    rejected: (state, { payload, type }) => {
      // console.log("action sendAPI msg error",payload )
      state.loading = false
      state.error = payload
    }
  }
  }
  