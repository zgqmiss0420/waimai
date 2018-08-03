
import Mock from 'mockjs'
import data from './data.json'


Mock.mock('/goods', {code: 0, data: data.goods})

Mock.mock('/ratings', {code: 0, data: data.ratings})

Mock.mock('/info', {code: 0, data: data.info})

//    不需要暴露, 需要执行一次(main里面 import './mock/mockServer')
