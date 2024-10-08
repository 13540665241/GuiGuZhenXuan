// 封装函数,判断当前时间是早上|上午|下午|晚上
export const getTime = () => {
  let message = ''
  let hour = new Date().getHours()
  if (hour <= 9) {
    message = '早上'
  } else if (hour <= 12) {
    message = '上午'
  } else if (hour <= 18) {
    message = '下午'
  } else {
    message = '晚上'
  }
  return message
}
