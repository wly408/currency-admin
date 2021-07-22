import request from '@/utils/request'
import request2 from '@/utils/request2'
import { encryptedData } from '@/utils/encrypt'
import { loginRSA, tokenName } from '@/config'

export async function login(data) {
  if (loginRSA) {
    data = await encryptedData(data)
  }
  return request({
    url: '/login',
    method: 'post',
    data,
  })
}
//ly:系统登录
export async function sysLogin(data) {
  if (loginRSA) {
    data = await encryptedData(data)
  }
  let rs = request2({
    url: 'http://localhost:8081/auth/login',
    method: 'post',
    data,
  });
  return rs;
}

export function getUserInfo(accessToken) {
  return request({
    url: '/userInfo',
    method: 'post',
    data: {
      [tokenName]: accessToken,
    },
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post',
  })
}

export function register() {
  return request({
    url: '/register',
    method: 'post',
  })
}
