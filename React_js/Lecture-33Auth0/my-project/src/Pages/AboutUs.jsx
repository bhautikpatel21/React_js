import React from 'react'
import { Menu, X, MapPin } from 'lucide-react'

const AboutUs = () => {

  const locations = [
    {
      id:1,
      title: 'Bengaluru office',
      timings: 'Mon-Sat 9am to 5pm.',
      address: '100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN',
    },
    {
      id:2,
      title: 'Head office',
      timings: 'Mon-Sat 9am to 5pm.',
      address: '12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN',
    },
    {
      id:3,
      title: 'Karnataka office',
      timings: 'Mon-Sat 9am to 5pm.',
      address: '42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025 IN',
    },
  ]

  const users = [
    {
      id:1,
      name: 'Gabrielle Fernandez',
      image:
        'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      position: 'Marketing Lead',
    },
    {
      id:2,
      name: 'Victória Silva',
      image:
        'https://images.generated.photos/vBRCiI_3UM4l40sU8s7fCwbJwzDwRTGpebzPkfHFsY4/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODgyMTAyLmpwZw.jpg',
      position: 'Back-end developer',
    },
    {
      id:3,
      name: 'Gabrielle Fernandez',
      image:
        'https://images.unsplash.com/photo-1549351512-c5e12b11e283?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600',
      position: 'Sales',
    },
    {
      id:4,
      name: 'Sadie Lewis',
      image:
        'https://images.unsplash.com/photo-1485960994840-902a67e187c8?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600',
      position: 'Sales',
    },
    {
      id:5,
      name: 'Thilde Olaisen',
      image:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=600&w=600',
      position: 'Marketing Lead',
    },
    {
      id:6,
      name: 'Deepika Ramesh',
      image:
        'https://images.generated.photos/lEhPUYYfYr9IOt13WZZGf2zbXZnCYdU1wUp7gcu_99c/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njg5NTQ5LmpwZw.jpg',
      position: 'Front-end developer',
    },
    {
      id:7,
      name: 'Jordi Santiago',
      image:
        'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      position: 'Front-end developer',
    },
    {
      id:8,
      name: 'Kerim Fahri',
      image:
        'https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600',
      position: 'Back-end developer',
    },
  ]

  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
      <h1 className='heading'>This is AboutUs Page</h1>
      <div>
        <div className="mx-auto max-w-7xl px-4">
          {/* Hero Map */}
          <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
            <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
              <p className="text-xs font-semibold leading-normal md:text-sm">About the company</p>
            </div>
            <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
              Made with love, right here in India
            </p>
            <p className="max-w-4xl text-base text-gray-600 md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates
              neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?
            </p>
          </div>
          <div className="w-full space-y-4">
            <img
              className="h-[200px] w-full rounded-xl object-cover md:h-full"
              src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/google-map.jpg"
              alt=""
            />
          </div>
          {/* locations */}
          <div className="my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around">
            {locations.map((location) => (
              <div key={location.id} className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5">
                <MapPin className="h-5 w-5" />
                <p className="w-full text-xl font-semibold  text-gray-900">{location.title}</p>
                <p className="w-full text-base text-gray-700">{location.timings}</p>
                <p className="text-sm font-medium">{location.address}</p>
              </div>
            ))}
          </div>
          <hr className="mt-20" />
          {/* greetings */}
          <div className="mt-16 flex items-center">
            <div className="space-y-6 md:w-3/4">
              <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
                <p className="text-xs font-semibold leading-normal md:text-sm">Join Us &rarr;</p>
              </div>
              <p className="text-3xl font-bold text-gray-900 md:text-4xl">Meet our team</p>
              <p className="max-w-4xl text-base text-gray-700 md:text-xl">
                Our philosophy is simple — hire a team of diverse, passionate people and foster a
                culture that empowers you to do your best work.
              </p>
              <div></div>
            </div>
          </div>
          {/* TEAM */}
          <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
            {users.map((user) => (
              <div className="rounded-md border" key={user.id}>
                <img
                  src={user.image}
                  alt={user.name}
                  className="h-[300px] w-full rounded-lg object-cover "
                />
                <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">{user.name}</p>
                <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
                  {user.position}
                </p>
              </div>
            ))}
          </div>
          {/* Hiring Banner */}
          <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
            <div className="space-y-6">
              <p className="text-sm font-semibold md:text-base">Join our team &rarr;</p>
              <p className="text-3xl font-bold md:text-4xl">We&apos;re just getting started</p>
              <p className="text-base text-gray-600 md:text-lg">
                Our philosophy is simple — hire a team of diverse, passionate people and foster a
                culture that empowers you to do your best work.
              </p>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Join Now
              </button>
            </div>
            <div className="md:mt-o mt-10 w-full">
              <img
                src="https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt="Getting Started"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <hr className="mt-6" />
        {/* footer */}
        <div className="mx-auto max-w-7xl">
          <footer className="px-4 py-10">
            <div className="flex flex-col md:flex-row md:items-center">
              <span>
                <svg
                  width="40"
                  height="46"
                  viewBox="0 0 50 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                    fill="black"
                  />
                </svg>
              </span>
              <div className="mt-4 grow md:ml-12 md:mt-0">
                <p className="text-base font-semibold text-gray-700">
                  © 2023 DevUI Component Library
                </p>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              <div className="mb-8 lg:mb-0">
                <p className="mb-6 text-lg font-semibold text-gray-700">Company</p>
                <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                  <li>About us</li>
                  <li>Company History</li>
                  <li>Our Team</li>
                  <li>Our Vision</li>
                  <li>Press Release</li>
                </ul>
              </div>
              <div className="mb-8 lg:mb-0">
                <p className="mb-6 text-lg font-semibold text-gray-700">Our Stores</p>
                <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                  <li>Washington</li>
                  <li>New Hampshire</li>
                  <li>Maine</li>
                  <li>Texas</li>
                  <li>Indiana</li>
                </ul>
              </div>
              <div className="mb-8 lg:mb-0">
                <p className="mb-6 text-lg font-semibold text-gray-700">Services</p>
                <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                  <li>UI / UX Design</li>
                  <li>App Development</li>
                  <li>API reference</li>
                  <li>API status</li>
                  <li>Documentation</li>
                </ul>
              </div>
              <div className="mb-8 lg:mb-0">
                <p className="mb-6 text-lg font-semibold text-gray-700">Legal</p>
                <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                  <li>Cookie Policy</li>
                  <li>Disclaimer</li>
                  <li>Media Policy</li>
                </ul>
              </div>
              <div className="mb-8 lg:mb-0">
                <p className="mb-6 text-lg font-semibold text-gray-700">Social Links</p>
                <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>Instagram</li>
                  <li>Linkedin</li>
                  <li>YouTube</li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
