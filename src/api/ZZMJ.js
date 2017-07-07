/**
 * Created by qky on 2017/7/7.
 */

import axios from 'axios'
const HOST = 'http://zzmj-dev.boostfield.com/'
const zzmj = {
  apiList: function (resp, err) {
    axios.get(HOST + 'v1/getApi').then(resp).catch(err)
  },

  login: function (params, resp, err) {
    axios.get(HOST + 'v1/user/login', {params: params}).then(resp).catch(err)
  },

  doUrl: function (params, resp, err) {
    let data = '?data=' + JSON.stringify(params)
    const url = HOST + 'v1/doApi' + data
    axios.get(url).then(resp).catch(err)
  }
}
export default zzmj
