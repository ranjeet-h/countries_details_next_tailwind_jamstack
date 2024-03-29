import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const Header = ({ selected, setSelected, searchData }) => {
  const people = [
    { id: 1, name: "All", unavailable: false },
    { id: 2, name: "Africa", unavailable: false },
    { id: 3, name: "Americas", unavailable: false },
    { id: 4, name: "Asia", unavailable: false },
    { id: 5, name: "Europe", unavailable: false },
    { id: 6, name: "Oceania", unavailable: false },
  ];

  // const [selected, setSelected] = useState(people[0]);

  // console.log(selected)

  return (
    <div className="  antialiased bg-[#fafafa] dark:bg-[#202c37] my-3 pt-9 mt-[-28px] z-50 text-[#111517] dark:text-[#ffffff]">
      <div className="container mx-auto sm:flex sm:justify-between items-center">
        <div className=" bg-[#fafafa] dark:bg-[#2b3945]    rounded-lg text-gray-600 dark:text-gray-300 flex flex-shrink items-center p-2 mx-4 sm:mx-1 my-7 w-[90vw]  shadow-md   sm:w-[28vw] sm:p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-6 text-gray-600 dark:text-gray-300 ml-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            className="bg-[#fafafa] dark:bg-[#2b3945] placeholder-gray-600 dark:placeholder-gray-300 ml-3 border-0 text-xs sm:text-base outline-none focus:ring-0 sm:w-10/12 "
            type="text"
            name=""
            id=""
            placeholder="Search for a country ..."
            onChange={(e) => searchData(e.target.value)}
          />
        </div>
        <div className=" w-52 sm:w-72 mx-4 sm:mx-1 my-12 sm:my-4 ">
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative mt-1 ">
              <Listbox.Button className="relative w-full  py-[1.15rem] pl-3 pr-10 text-left bg-[#fafafa] dark:bg-[#2b3945] dark:text-gray-300 rounded-lg shadow-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500  sm:text-sm">
                <span className="block truncate">{selected.name}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-[#fafafa] dark:bg-[#2b3945]  dark:text-gray-300 bg-opacity-100 z-50  rounded-lg shadow-lg  max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {people.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `${
                          active
                            ? "text-gray-600  bg-gray-100 dark:bg-gray-700"
                            : "text-gray-900"
                        }
                         dark:text-gray-300 cursor-default select-none relative py-2 pl-8 sm:pl-10 pr-4`
                      }
                      value={person}
                    >
                      {({ active, selected }) => (
                        <>
                          <span
                            className={`${
                              selected ? "font-medium" : "font-normal"
                            } block truncate `}
                          >
                            {person.name}
                          </span>
                          {active ? (
                            <span
                              className={`${
                                active ? "text-gray-800" : "text-gray-800"
                              }
                               dark:text-white absolute inset-y-0 left-0 flex items-center pl-3`}
                            >
                              <CheckIcon className="w-5 h-5 animate-bounce " />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>
    </div>
  );
};

export default Header;
