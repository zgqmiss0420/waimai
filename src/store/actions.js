import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT
} from './mutation-types'
import {reqAddress,reqCategorys,reqShops,reqUser,reqLogout,reqGoods,reqRatings,reqInfo} from '../api'
export default {
  async getAddress({commit,state}) {
    const {latitude,longitude} = state
    const geohash = `${latitude},${longitude}`
    const result = await reqAddress(geohash)
    if(result.code === 0) {
      const address = result.data;
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  async getCategorys({commit}) {
    const result = await reqCategorys()
    if(result.code === 0) {
      const categorys = result.data;
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
  async getShops({commit,state}) {
    const {latitude,longitude} = state
    const result = await reqShops(latitude , longitude)
    if(result.code === 0) {
      const shops = result.data;
      commit(RECEIVE_SHOPS,{shops})
    }
  },
  
  saveUser ({commit},user) {
    commit(RECEIVE_USER,{user})
  },
  
  async getUser({commit}){
    const result = await reqUser()
    if(result.code === 0){
      const user = result.data
      commit(RECEIVE_USER,{user})
    }
  },
  
  async logout({commit}){
    const result = await reqLogout()
    if(result.code === 0){
      commit(RESET_USER)
    }
  },
  
  async getGoods ({commit, state},cb) {
    // 调用接口请求函数从后台获取数据
    const result = await reqGoods()
    if(result.code===0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      cb && cb()
    }
  },
  
  // 异步获取评价列表
  async getRatings ({commit, state},cb) {
    // 调用接口请求函数从后台获取数据
    const result = await reqRatings()
    if(result.code===0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
      cb && cb()
    }
  },
  
  // 异步获取商家信息
  async getInfo ({commit, state},cb) {
    // 调用接口请求函数从后台获取数据
    const result = await reqInfo()
    if(result.code===0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
      cb && cb()
    }
  },
  
  updateFoodCount({commit,state}, {food,isAdd}){
    if(isAdd){
      commit(INCREMENT_FOOD_COUNT,{food})
    }else{
      commit(DECREMENT_FOOD_COUNT,{food})
    }
  }
}
