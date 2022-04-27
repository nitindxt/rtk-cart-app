/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  BellIcon,
  MenuIcon,
  XIcon,
  ShoppingBagIcon,
} from '@heroicons/react/outline';
import img from './logo.png';

const user = {
  // name: 'Tom Cook',
  // email: 'tom@example.com',
  // imageUrl:
  //   'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
  // { name: 'Dashboard', href: '#', current: true },
  // { name: 'Team', href: '#', current: false },
  // { name: 'Projects', href: '#', current: false },
  // { name: 'Calendar', href: '#', current: false },
  // { name: 'Reports', href: '#', current: false },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

function classNames(...className) {
  return className.filter(Boolean).join(' ');
}

function App() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html className="h-full bg-gray-100">
        <body className="h-full">
        ```
      */}
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-20 w-20" src={img} alt="Workflow" />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium',
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="bg-gray-800 p-1 rounded-full text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open cart</span>
                            <ShoppingBagIcon
                              className="h-8 w-8"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700',
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium',
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              {/* for below div className="border-4 border-dashed border-gray-200 rounded-lg h-96" */}
              <div>
                <div className="overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50 max-h-96 supports-scrollbars:pr-2 lg:max-h-96 overflow-y-scroll scrollbar">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr>
                        <th className="sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300">
                          <div className="py-2 pr-2 border-b border-slate-200 dark:border-slate-400/20">
                            className
                          </div>
                        </th>
                        <th className="sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300">
                          <div className="py-2 pl-2 border-b border-slate-200 dark:border-slate-400/20">
                            Properties
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="align-baseline">
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400"
                        >
                          col-auto
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
                        >
                          grid-column: auto;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-span-1
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column: span 1 / span 1;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-span-2
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column: span 2 / span 2;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-span-3
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column: span 3 / span 3;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-span-4
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column: span 4 / span 4;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-span-5
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column: span 5 / span 5;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-span-6
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column: span 6 / span 6;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-span-7
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column: span 7 / span 7;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-span-8
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column: span 8 / span 8;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-span-9
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column: span 9 / span 9;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-span-10
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column: span 10 / span 10;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-span-11
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column: span 11 / span 11;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-span-12
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column: span 12 / span 12;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-span-full
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column: 1 / -1;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-start-1
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column-start: 1;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-start-2
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column-start: 2;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-start-3
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column-start: 3;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-start-4
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column-start: 4;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-start-5
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column-start: 5;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-start-6
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column-start: 6;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-start-7
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column-start: 7;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-start-8
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column-start: 8;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-start-9
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column-start: 9;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-start-10
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column-start: 10;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-start-11
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column-start: 11;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-start-12
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column-start: 12;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-start-13
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column-start: 13;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-start-auto
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column-start: auto;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-end-1
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column-end: 1;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-end-2
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column-end: 2;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-end-3
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column-end: 3;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-end-4
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column-end: 4;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-end-5
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column-end: 5;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-end-6
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column-end: 6;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-end-7
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column-end: 7;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-end-8
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column-end: 8;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-end-9
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column-end: 9;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-end-10
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column-end: 10;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-end-11
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column-end: 11;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-end-12
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column-end: 12;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-end-13
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column-end: 13;
                        </td>
                      </tr>
                      <tr>
                        <td
                          translate="no"
                          className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          col-end-auto
                        </td>
                        <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
                        >
                          grid-column-end: auto;
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="sticky bottom-0 h-px -mt-px bg-slate-200 dark:bg-slate-400/20" />
                </div>
              </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
