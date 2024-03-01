import { Input, InputProps } from 'antd'
import React from 'react'

function NumberInput(props: InputProps) {
  return (
    <Input
      {...props}
      onChange={(e) => {
        const value = e.target.value.toString().replaceAll(/\D/g, '')
        if (value !== props.value) {
          e.target.value = value
          props.onChange?.(e)
        }
      }}
    />
  )
}

export default NumberInput
