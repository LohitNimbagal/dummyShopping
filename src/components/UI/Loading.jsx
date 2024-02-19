import React from 'react'

export const Loading = () => {
  return (
    <>
        <div className='w-full min-h-screen flex items-center justify-center'>
            <div class="flex gap-2">
                <div class="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
                <div class="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
                <div class="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
            </div>
        </div>
    </>
  )
}
