import type { ReactNode } from 'react'
import React from 'react'

interface PageLayoutProps {
  leftSlot: ReactNode
  rightSlot: ReactNode
}

const PageLayout: React.FC<PageLayoutProps> = ({ leftSlot, rightSlot }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        {leftSlot}
      </div>
      <div className="w-full md:w-1/2">
        {rightSlot}
      </div>
    </div>
  )
}

export default PageLayout
