import fs from 'fs'
import path from 'path'

/**
 * 递归地检索一个目录及其子目录中的所有文件
 *
 * @param {string} dirPath - 要搜索的目录的路径
 * @param {string[]} arrayOfFiles - (可选)目前找到的文件数组
 * @return {string[]} 文件路径数组
 */
export function getAllFiles(dirPath: string, arrayOfFiles?: string[]) {
  const files = fs.readdirSync(dirPath, { withFileTypes: true })

  let newArrayOfFiles = arrayOfFiles || []

  files.forEach((file) => {
    if (file.isDirectory()) {
      newArrayOfFiles = getAllFiles(
        path.resolve(dirPath, file.name),
        arrayOfFiles,
      )
    } else {
      newArrayOfFiles.push(path.resolve(dirPath, file.name))
    }
  })

  return newArrayOfFiles
}
