import axios from 'axios'
import './request'

export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: params})
      .then(res => {
        resolve(res)
      }).catch(err => {
      reject(err)
    })
  })
}

export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        resolve(res)
      }).catch(err => {
      reject(err)
    })
  })
}

export function put(url, params) {
  return new Promise((resolve, reject) => {
    axios.put(url, params)
      .then(res => {
        resolve(res)
      }).catch(err => {
      reject(err)
    })
  })
}

export function del(url, params) {
  return new Promise((resolve, reject) => {
    axios.delete(url, params)
      .then(res => {
        resolve(res)
      }).catch(err => {
      reject(err)
    })
  })
}
