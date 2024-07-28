import type { MetaFunction } from '@remix-run/node'
import ThemeSwitch from 'components/ThemeSwitch'
import PageLayout from 'components/layout/PageLayout'

import FormContent from 'components/config/FormContent'

export const meta: MetaFunction = () => {
  return [
    { title: 'Old Paper' },
    { name: 'description', content: 'Old Paper with some text.' },
  ]
}

export default function Index() {
  return (
    <div className="font-sans min-h-screen p-4">
      <ThemeSwitch />
      <PageLayout
        leftSlot={<FormContent />}
        rightSlot={<h1 className="text-3xl">Right Slot</h1>}
      />
    </div>
  )
}
