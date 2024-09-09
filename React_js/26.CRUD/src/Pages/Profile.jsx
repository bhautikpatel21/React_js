import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const Profile = () => {
    return (
        <div className='h-lvh flex justify-center items-center'>
            <div className="flex max-w-2xl flex-col  items-center rounded-md border bg-white p-2">
                <div className="h-full w-full md:h-[200px] md:w-[300px]">
                    <img
                        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                        alt="Laptop"
                        className="h-full w-full rounded-md object-cover"
                    />
                </div>
                <div>
                    <div className="p-4">
                        <h1 className="inline-flex items-center text-lg font-semibold">
                            Name <ArrowUpRight className="ml-2 h-4 w-4" />
                        </h1>
                        <p className="mt-3 text-sm text-gray-600">
                           CRUD in React With Axios
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
