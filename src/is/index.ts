/* 一些类型的判断方法 */
const toString = Object.prototype.toString
/**
 * 判断某个数据是否为某个类型
 * @param {unknown} val 需要验证的值
 * @param {string} type 需要验证的值
 * @return {*} 返回true或者false
 * @example
 * ``` typescript
 * is(123, 'Number')
 * ```
 */
export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`
}

/**
 * 判断是否非undefined
 * @param {T} 需要验证得值
 * @return {boolean} true or false
 */
export function isDef<T = unknown>(val?: T): val is T {
  return typeof val !== 'undefined'
}

/**
 * 判断是undefined
 * @param {T} 需要验证得值
 * @return {boolean} true or false
 */
export function isUnDef<T = unknown>(val?: T): val is T {
  return !isDef(val)
}

/**
 * 判断是否是对象
 * @param {any} val 需要验证得值
 * @return {*}
 */
export function isObject(val: any): val is Record<any, any> {
  return val !== null && is(val, 'Object')
}

/**
 *  判断是否为空，array.object,map ,set是否为空
 * @param {T} val
 * @return {*}
 * @example
 * ``` typescript
 * isEmpty({}) // 返回true
 * isEmpty([]) // 返回true
 * ```
 */
export function isEmpty<T = unknown>(val: T): val is T {
  if (isArray(val) || isString(val)) {
    return val.length === 0
  }

  if (val instanceof Map || val instanceof Set) {
    return val.size === 0
  }

  if (isObject(val)) {
    return Object.keys(val).length === 0
  }

  return false
}

/**
 * 判断是否是日期格式
 * @param {T} val
 * @return {*} true or false
 */
export function isDate(val: unknown): val is Date {
  return is(val, 'Date')
}

/**
 * 判断是否是null
 * @param {unknown} val
 * @return {*} 若是返回true，否则返回false
 */
export function isNull(val: unknown): val is null {
  return val === null
}

/**
 * 判断是否是数字类型
 * @param {unknown} val
 * @return {*} 若是返回
 */
export function isNumber(val: unknown): val is number {
  return is(val, 'Number')
}

/**
 * 判断是否是Promise
 * @param {unknown} val
 * @return {*} 若是返回true， 否则返回false
 */
export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

export function isString(val: unknown): val is string {
  return is(val, 'String')
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(val: unknown): val is Function {
  return typeof val === 'function'
}

export function isBoolean(val: unknown): val is boolean {
  return is(val, 'Boolean')
}

export function isRegExp(val: unknown): val is RegExp {
  return is(val, 'RegExp')
}
/**
 * 判断是否是数组
 * @param {any} val 需要验证的值
 * @return {*} 若是数组返回true 否则返回false
 */
export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val)
}

export function isWindow(val: any): val is Window {
  return typeof window !== 'undefined' && is(val, 'Window')
}

export function isElement(val: unknown): val is Element {
  return isObject(val) && !!val.tagName
}

export function isMap(val: unknown): val is Map<any, any> {
  return is(val, 'Map')
}

/**
 * 是否是在服务器node环境
 */
export const isServer = typeof window === 'undefined'

/**
 * 是否是浏览器环境
 */
export const isClient = !isServer

// 系统信息
const ua = window.navigator.userAgent.toLocaleLowerCase() as string

/**
 * 判断是否在手机浏览器
 * @returns 如果是在手机浏览器返回true,否则返回false
 */
export const isMobile = (): boolean => {
  let isMobile = false
  if (ua.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|IEMobile)/i)) {
    isMobile = true
  }
  return isMobile
}
/**
 * 判断是否在微信内置浏览器
 * @returns 如果是返回true,否则返回false
 */
export const isWeiXin = () => {
  let result = false
  if (ua.match(/micromessenger/i)) {
    result = false
  }
  return result
}
