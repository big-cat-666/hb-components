import { Input, InputProps } from 'antd'
import React from 'react'

function DecimalNumberInput(
  props: InputProps & {
    decimalLength?: number
  },
) {
  const { decimalLength = 2 } = props

  return (
    <Input
      {...props}
      allowClear
      onChange={(e) => {
        const isPaste =
          (
            e.nativeEvent as Event & {
              inputType: string
            }
          ).inputType === 'insertFromPaste'
        let value = e.target.value.toString()
        if (isPaste) {
          value = value
            .replaceAll(/[^0-9.]/g, '')
            .replace(
              /^([^.]*\.)(.*)/,
              (_, first, rest) => first + rest.replace(/\./g, ''),
            )
        } else {
          if (
            props.value?.toString().includes('.') &&
            value.match(/\./g) !== null &&
            value.match(/\./g)!.length > 1
          ) {
            value = props.value.toString()
          } else {
            value = value.replaceAll(/[^\d.]/g, '')
          }
        }
        if (!value) {
          value = ''
        } else if (value.includes('.')) {
          const arr = value.split('.')
          if (arr[1] && arr[1].length > decimalLength) {
            value = arr[0] + '.' + arr[1].slice(0, decimalLength)
          }
        }

        if (value !== props.value) {
          e.target.value = value
          props.onChange?.(e)
        }
      }}
    />
  )
}

export default DecimalNumberInput
