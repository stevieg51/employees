import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'

const navigation = [
  { name: 'Employees', href: 'employees' },
  { name: 'Customers', href: 'customers' },
  { name: 'Projects', href: '/projects' },
  { name: 'Calendar', href: '/calendar' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header(props) {
  return (
    <>
    <Disclosure as="nav" className=" bg-emerald-700">
      {({ open }) => (
        <>
          <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-14 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className=" relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block no-underline h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block no-underline h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({isActive}) => {
                          console.log(item.href +" :" + isActive)
                          return 'rounded-md px-3 py-2 text-sm font-medium ' +
                          (isActive ? 'no-underline  bg-slate-600 text-white' : 'no-underline text-gray-300 hover:bg-zinc-500 hover:text-white' );
                        }}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div> 
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                  <NavLink
                  key={item.name}
                  to={item.href}
                  className={({isActive}) => {
                    console.log(item.href +" :" + isActive)
                    return 'block rounded-md px-3 py-2  text-base font-medium ' +
                    (isActive ? 'no-underline  bg-slate-600 text-white' : 'no-underline text-gray-300 hover:bg-zinc-500 hover:text-white' );
                  }}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    {props.children}
   </>
  )
}