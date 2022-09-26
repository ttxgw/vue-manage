import Mock from 'mockjs'
import homeApi from './mockServeData/home'

Mock.mock('/Home/getData', homeApi.getStatisticalData)
