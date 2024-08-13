import React from 'react'

const NewProductPage = () => {


    const NewProduct = [
        {
            productName: 'OnePlus Nord CE 3 5G (Aqua Surge, 8GB RAM, 128GB Storage)',
            productRate: 22999,
            productImage: 'https://m.media-amazon.com/images/I/6175SlKKECL._SX679_.jpg',
            productColor: 'Blue'
        }
    ]

    return (
        <div>
            {
                NewProduct.map((item) => {
                    return (
                        <>
                            <div className="w-[300px] rounded-md border">
                                <img
                                    src={item.productImage}
                                    alt="Laptop"
                                    className="h-[200px] w-full rounded-t-md object-cover"
                                />
                                <div className="p-4">
                                    <h1 className="inline-flex items-center text-lg font-semibold">
                                        {item.productName}
                                    </h1>
                                    <div className="mt-4">
                                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                            {item.productRate}
                                        </span>
                                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                            {item.productColor}
                                        </span>
                                    </div>
                                    <button
                                        type="button"
                                        className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        BuyNow
                                    </button>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default NewProductPage
