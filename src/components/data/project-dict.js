/**
 * 系统字典
 * @type {Record<string, {label: string, value: string|number}[]>}
 */
export const projectDict = {
    sex: trans([['男', 1], ['女', 2]])
}

/**
 * 快捷生成字典
 * @param {[label: string, value: string|number][]} dict
 * @return {{label: string, value: string|number}[]}
 */
function trans(dict) {
    return dict.map(it => ({label: it[0], value: it[1]}))
}