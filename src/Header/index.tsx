import { QuestionCircleOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import React from 'react'
import styles from './index.module.less'

function Header({
  children,
  title,
  description,
  style = {},
}: React.PropsWithChildren<{
  title: string
  description?: string
  style?: React.CSSProperties
}>) {
  return (
    <div className={`${styles.header} header`} style={style}>
      <span className={`${styles.title} header-title`}>
        {description ? (
          <>
            <span className="title-text" style={{ paddingRight: 4 }}>
              {title}
            </span>
            <Tooltip title={description}>
              <QuestionCircleOutlined
                style={{
                  fontSize: '14px',
                  verticalAlign: 'middle',
                  marginTop: '-2px',
                  color: '#00000052',
                }}
              />
            </Tooltip>
          </>
        ) : (
          <span>{title}</span>
        )}
      </span>
      <div style={{ flex: 1 }} />
      {children}
    </div>
  )
}

export default Header
