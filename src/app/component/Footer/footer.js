import React from 'react';

export default function Footer() {
  return (
    <div>
      {/* Wave SVG */}
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f0f9ff" // Color matching the footer background
            fillOpacity="1"
            d="M0,256L34.3,240C68.6,224,137,192,206,202.7C274.3,213,343,267,411,250.7C480,235,549,149,617,149.3C685.7,149,754,235,823,256C891.4,277,960,235,1029,224C1097.1,213,1166,235,1234,245.3C1302.9,256,1371,256,1406,256L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Footer */}
      <footer className="bg-[#f0f9ff] dark:bg-[#0099ff] -mb-20">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap- px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-cyan-900 uppercase">Company</h2>
              <ul className="text-cyan-700 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-cyan-900 uppercase">Help center</h2>
              <ul className="text-cyan-700 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-cyan-900 uppercase">Legal</h2>
              <ul className="text-cyan-700 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-cyan-900 uppercase">Download</h2>
              <ul className="text-cyan-700 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Windows
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-6 bg-[#f0f9ff] dark:bg-[#007acc] md:flex md:items-center md:justify-between">
            <span className="text-sm text-blue-900 sm:text-center">
              © 2025 <a href="https://flowbite.com/"></a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
{/* Social Media Icons */}
<div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
  <a href="#" className="text-blue-900 hover:text-cyan-900 dark:hover:text-white">
    <svg
      className="w-4 h-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 8 19"
    >
      <path
        fillRule="evenodd"
        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
        clipRule="evenodd"
      />
    </svg>
    <span className="sr-only">Facebook page</span>
  </a>
  <a href="#" className="text-blue-800 hover:text-blue-900 dark:hover:text-white">
    <svg
      className="w-4 h-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 21 16"
    >
      <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
    </svg>
    <span className="sr-only">Discord community</span>
  </a>
  <a href="#" className="text-blue-800 hover:text-blue-900 dark:hover:text-white">
    <svg
      className="w-4 h-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 17"
    >
      <path
        fillRule="evenodd"
        d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
        clipRule="evenodd"
      />
    </svg>
    <span className="sr-only">Twitter page</span>
  </a>
</div>

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
