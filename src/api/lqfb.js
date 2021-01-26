import request from '@/utils/request'
import qs from 'qs'
import axios from 'axios'

// 防火人员信息查询
export function getFhry({ param }) {
  return request({
    url: '/queryStaff',
    method: 'post',
    data: qs.stringify({
      param
    })
  })
}

// 护林员在线人数
export function getHlyOlineNum() {
  return request({
    url: '/countOnlineForestKeeper',
    method: 'get'
  })
}

// 防火人员员在线人数
export function getFhryOlineNum() {
  return request({
    url: '/countOnlineFireman',
    method: 'get'
  })
}

// 护林员信息查询
export function getHly({ param }) {
  return request({
    url: '/queryForestKeeper',
    method: 'post',
    data: qs.stringify({
      param
    })
  })
}

// 获取防火人员当前定位
export function getFhryCurPositionByPhone(phone = null) {
  return request({
    url: '/getCurrentPosition',
    method: 'post',
    data: qs.stringify({
      phone
    })
  })
}

// 获取防火人员历史位置
export function getFhryHisPosition({ phone, startTime, endTime }) {
  return request({
    url: '/getHisPosition',
    method: 'post',
    data: qs.stringify({
      phone,
      startTime,
      endTime
    })
  })
}

// 获取视频点信息
export function getMonitorList() {
  return request({
    url: '/queryCameras',
    method: 'get',
    timeout: 0
  })
}

// 获取视频流
export function getVideoByCode(indexCode) {
  return request({
    url: '/cameraStream',
    method: 'post',
    data: qs.stringify({
      indexCode
    })
  })
}

// 获取森林消防队原人员信息
export function getFiremanByTeamName(teamName) {
  return request({
    url: `/queryFiremanByTeamName?name=${teamName}`,
    method: 'get'
  })
}

// 获取图层资源数据
export function getResources({ resources, searchStr }) {
  return request({
    url: `/queryResources`,
    method: 'post',
    data: qs.stringify({
      resources,
      searchStr: searchStr || ''
    })
  })
}

// 获取装备物资
export function getEquipment(saveCode) {
  return request({
    url: `/getWzzb?code=${saveCode}`,
    method: 'get'
  })
}

// 获取林区资源数据
export function getLqzyByCoordinate({ x, y }) {
  return axios.get(`/App/AppMap/Common/GetInfoByPoint.ashx?x=${x}&y=${y}&tcs=XIAOBAN%3B`)
}

// 获取森林火险等级
export function getFireInfo() {
  return axios.get(`http://10.36.226.5:9090/slfh/getFireInfo`)
}

// 获取预测降雨 短时预报3小时
export function getForRain_3H() {
  return request({
    url: '/getRainForecast',
    method: 'get'
  }).then(res => {
    return res.data
  })
}