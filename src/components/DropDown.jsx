import React from 'react'

const DropDown = ({icons,text,drop}) => {
  return (
    <div>
    <button
    id="dropdownCheckboxButton"
    data-dropdown-toggle="dropdownDefaultCheckbox"
    class="text-[#787486] bg-transparent ring-1 outline-none ring-[#787486] font-medium rounded-lg text-base px-4 py-2 text-center inline-flex items-center"
    type="button"
  >
    {/* <icons  /> */}
    {icons}
    {text}
    {drop&&<svg
      class="w-4 h-4 ml-2"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>}
  </button>
  <div
            id="dropdownDefaultCheckbox"
            class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownCheckboxButton"
            >
              <li>Temp</li>
            </ul>
          </div>
  </div>
  )
}

export default DropDown