'use client'
import { useFormik } from 'formik';
import React from 'react'
// import toast from 'react-hot-toast';

const AddProduct = () => {

    const AddProduct = useFormik({
        initialValues: {
            title: "",
            description: "",
            image: "",
            category: "",
            price: "",
           
        },
        onSubmit: async (values) => {
           
            console.log(values);

            const res = await fetch("http://localhost:5000/product/add", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log(res.status);

            // if (res.status === 200) {
            //     enqueueSnackbar("Publish Successfully", { varient: "success" });
            // } else if (res.status === 400) {
            //     enqueueSnackbar("Something went wrong", { varient: "danger" });
            // } else {
            //     enqueueSnackbar("Something went wrong", { varient: "danger" });
            // }
        },
    });

    return (
        <div >
            <div className="flex min-h-full flex-col justify-center px-6 py-3 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <h2 style={{ fontFamily: "initial" }} className=" fs-2 mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Add Product
                    </h2>
                </div>
                <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-3" action="#" method="POST" onSubmit={AddProduct.handleSubmit}>
                        <div>
                            <label style={{ fontFamily: "initial" }}
                                htmlFor="title"
                                className=" fw-bold block text-sm font-medium leading-6 text-gray-900"
                            >
                                Title
                            </label>
                            <div className="mt-2">
                                <input
                                    id="title"
                                    value={AddProduct.values.title}
                                    onChange={AddProduct.handleChange}
                                    name="title"
                                    type="title"
                                    autoComplete="title"
                                    required=""
                                    className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label style={{ fontFamily: "initial" }}
                                    htmlFor="description"
                                    className="fw-bold block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Description
                                </label>
                                <div className="text-sm">

                                </div>
                            </div>
                            <div className="mt-2">
                                <textarea
                                    id="description"
                                    value={AddProduct.values.description}
                                    onChange={AddProduct.handleChange}
                                    name="description"
                                    type="description"
                                    autoComplete="description"
                                    required=""
                                    className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>

                        </div>
                        <div>
                            <label style={{ fontFamily: "initial" }}
                                htmlFor="price"
                                className=" fw-bold block text-sm font-medium leading-6 text-gray-900"
                            >
                                Price
                            </label>
                            <div className="mt-2">
                                <input
                                    id="price"
                                    value={AddProduct.values.price}
                                    onChange={AddProduct.handleChange}
                                    name="price"
                                    type="price"
                                    autoComplete="price"
                                    required=""
                                    className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label style={{ fontFamily: "initial" }}
                                htmlFor="category"
                                className="fw-bold block text-sm font-medium leading-6 text-gray-900"
                            >
                                Category
                            </label>
                            <div className="mt-2">
                                <input
                                    id="category"
                                    value={AddProduct.values.category}
                                    onChange={AddProduct.handleChange}
                                    name="category"
                                    type="category"
                                    autoComplete="category"
                                    required=""
                                    className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label style={{ fontFamily: "initial" }}
                                htmlFor="category"
                                className="fw-bold block text-sm font-medium leading-6 text-gray-900"
                            >
                                Image URL
                            </label>
                            <div className="mt-2">
                                <input
                                    id="image"
                                    value={AddProduct.values.image}
                                    onChange={AddProduct.handleChange}
                                 
                                    type="text"
                                    autoComplete="category"
                                    required=""
                                    className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>


                        <div>
                            <button style={{ fontFamily: "initial" }}
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Add
                            </button>
                        </div>
                    </form>

                </div>
            </div>






        </div>
    )
}

export default AddProduct