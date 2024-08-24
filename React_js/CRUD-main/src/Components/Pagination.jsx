import React from 'react'

const Pagination = () => {
  return (
    <div className='flex justify-center items-center'>
    <div class="flex items-center">
  <a
    href="#"
    class="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900"
  >
    ← Previous
  </a>
  <a
    href="#"
    class="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
  >
    1
  </a>
  <a
    href="#"
    class="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
  >
    2
  </a>
  <a
    href="#"
    class="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
  >
    3
  </a>
  <a
    href="#"
    class="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
  >
    4
  </a>
  <a href="#" class="mx-2 text-sm font-semibold text-gray-900">
    Next →
  </a>
</div>

    </div>
  )
}

export default Pagination
