/**
 * 判断是否是手机号码
 * @param {string} val
 * @returns {*} 如果是正确手机号，那么返回true
 * @example
 * ``` typescript
 * validatorPhone('18709098765') // 返回true
 * validatorPhone('1870909897') // 返回false
 * ```
 */
export const validatorPhone = (val: string): boolean => {
  const reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
  return reg.test(val)
}

/**
 * 判断是否是为身份证号码
 * @param {string} val
 * @returns {*} 如果是身份证号码，那么返回true 否则false
 */
export const validatorIdCard = (val: string): boolean => {
  const reg = /\d{17}[\d|x]|\d{15}/
  return reg.test(val)
}

/**
 * 判断是否是为车牌号码
 * @param {string} val
 * @returns {*} 如果是身份证号码，那么返回true 否则false
 */
export const validatorCarCard = (val: string): boolean => {
  const reg =
    /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[a-zA-Z](([DF]((?![IO])[a-zA-Z0-9](?![IO]))[0-9]{4})|([0-9]{5}[DF]))|[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1})$/
  return reg.test(val)
}
