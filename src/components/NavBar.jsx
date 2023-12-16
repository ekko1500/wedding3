import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLocation, useNavigate } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/home", current: true },
  { name: "Gallery", href: "/gallery", current: false },
  { name: "About", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const navigate = useNavigate();

  let location = useLocation();

  console.log(location.pathname);

  return (
    <Disclosure as="nav" className="fixed z-10 w-full bg-white text-4xl     ">
      {({ open }) => (
        <>
          <div className="mx-auto w-full sm:w-4/6 px-2 sm:px-6 lg:px-8  p-3">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-pink-400 hover:bg-pink-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-16 w-16" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-16 w-16" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex  flex-1 items-center justify-between  ">
                {/* logo */}
                <div className="  pt-1">
                  <h3 className=" font-bold text-pink-300 text-4xl lg:text-5xl ">
                    Zayar & Khine
                  </h3>
                </div>
                {/* menu */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        // href={item.href}
                        onClick={() => navigate(`${item.href}`)}
                        className={classNames(
                          location.pathname.includes(item.name.toLowerCase())
                            ? " bg-pink-400 text-white"
                            : "text-gray-500 hover:bg-pink-50 hover:text-pink-300",
                          "rounded-md px-3 py-2 text-2xl font-medium cursor-pointer"
                        )}
                        aria-current={
                          location.pathname.includes(item.name)
                            ? "page"
                            : undefined
                        }
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 ">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    location.pathname.includes(item.name.toLowerCase())
                      ? " bg-pink-400 text-white"
                      : "text-gray-500 hover:bg-pink-50 hover:text-pink-300",
                    "block rounded-md px-3 py-2 text-3xl mt-3 py-3 font-medium "
                  )}
                  aria-current={
                    location.pathname.includes(item.name.toLowerCase())
                      ? "page"
                      : undefined
                  }
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
