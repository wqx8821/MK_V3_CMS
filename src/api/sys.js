import service from '@/utils/request'

export const login = (data) => {
  return service({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
