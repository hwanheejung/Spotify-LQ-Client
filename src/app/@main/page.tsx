'use client'

import { check } from '@/lib/api/auth'

export default function Home() {
  return (
    <div className="h-full rounded-lg bg-gray-700">
      <button
        onClick={async () => {
          await check()
        }}
      >
        Check
      </button>
    </div>
  )
}
