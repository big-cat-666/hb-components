declare module '*.module.scss' {
  const classes: { [key: string]: string }
  export default classes
}
declare module '*.module.less' {
  const classes: { [key: string]: string }
  export default classes
}

declare module '*.less' {
  const resource: { [key: string]: string }
  export = resource
}
