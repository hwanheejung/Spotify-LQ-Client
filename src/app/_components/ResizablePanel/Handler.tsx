'use client'

import { PanelResizeHandle } from 'react-resizable-panels'

const Handler = () => (
  <PanelResizeHandle
    className="w-px hover:bg-gray-100"
    aria-label="Resizable panel"
  />
)

export default Handler
