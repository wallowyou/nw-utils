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
 * 判断是否十日期
 * @param {T} val
 * @return {*}
 */

export function isDate(val: unknown): val is Date {
  return is(val, 'Date')
}

export function isNull(val: unknown): val is null {
  return val === null
}

export function isNullAndUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) && isNull(val)
}

export function isNullOrUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) || isNull(val)
}

export function isNumber(val: unknown): val is number {
  return is(val, 'Number')
}

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
