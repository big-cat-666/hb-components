import { Select, SelectProps } from 'antd'
import { SelectValue } from 'antd/lib/select'
import Match from 'pinyin-match'
import React from 'react'

export default function PinyinSelect<T extends SelectValue = SelectValue>(
  props: SelectProps<T>,
): React.ReactElement {
  return (
    <Select
      {...props}
      filterOption={(input, option) =>
        !!Match.match(option?.label?.toString() || '', input)
      }
      showArrow
      showSearch
    />
  )
}
