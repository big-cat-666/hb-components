import { Tooltip } from 'antd'
import React from 'react'

export default function EllipsisTooltip({
  content,
  minWidth,
}: {
  content: React.ReactNode
  minWidth?: number | string
}) {
  const [isEllipsis, setEllipsis] = React.useState<boolean>(false)
  const contentRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const dom = contentRef.current
    const ro = new ResizeObserver(() => {
      if (dom) {
        if (dom.clientWidth < dom.scrollWidth) {
          setEllipsis(true)
        } else {
          setEllipsis(false)
        }
      }
    })

    if (dom) {
      ro.observe(dom)
    }

    return () => {
      ro.disconnect()
    }
  }, [content])

  return (
    <Tooltip
      color="white"
      overlayInnerStyle={{ color: '#333', fontSize: '12px' }}
      title={isEllipsis && content ? content : undefined}
    >
      <div
        style={{
          display: 'flex',
        }}
      >
        <div
          ref={contentRef}
          style={{
            flex: 1,
            width: 0,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            minWidth,
          }}
        >
          {content}
        </div>
      </div>
    </Tooltip>
  )
}
