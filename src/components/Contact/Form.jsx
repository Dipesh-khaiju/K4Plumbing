
import React from 'react';

const Form = () => {
    return (
        <div className="absolute lg:left-28 w-full lg:bottom-7 p-4 max-w-md mx-auto">
            <form className="bg-white rounded-none px-8 pt-6 pb-8 mb-4 box">
                <h2 className="text-[#4273C1] text-2xl title-font font-bold mb-6">
                    Request A Free Quote
                </h2>
                <div className="mb-4">
                    <input
                        className="shadow appearance-none border rounded-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="fullName"
                        type="text"
                        placeholder="Full Name"
                        name="fullName"
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="shadow appearance-none border rounded-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                        name="email"
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="shadow appearance-none border rounded-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="contact"
                        type="text"
                        placeholder="Contact"
                        name="contact"

                    />
                </div>
                <div className="mb-4">
                    <input
                        className="shadow appearance-none border rounded-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="serviceTitle"
                        type="text"
                        placeholder="Service Title"
                        name="serviceTitle"

                    />
                </div>
                <div className="mb-4">
                    <textarea
                        className="shadow appearance-none border rounded-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows="5"
                        id="serviceDescription"
                        placeholder="Service Description"
                        name="serviceDescription"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-[#4273C1] hover:bg-blue-900 w-full text-white font-bold py-2 px-4 rounded-none focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Send Request
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
