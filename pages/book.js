export default function Book() {
  return (
    <div className="w-full relative">
      <div className="bg-white m-10">
        <h2 className="text-2xl font-bold text-act-grey text-left">
          Heading to Booking Section
        </h2>
        <h4 className="text-lg text-act-grey text-left mt-2 mb-8">
          Secondary Text Heading
        </h4>
        <form className="" name="booking" method="POST" data-netlify="true">
          <div className="grid">
            <div className="bg-gray-200 rounded-xl p-5 mb-10">
              <h3 className="text-md mb-2 font-semibold">
                Client Information:
              </h3>
              <div className="md:grid md:grid-rows-6 md:grid-flow-col md:gap-4">
                {/* Name */}
                <div className="row-span-2">
                  <label className="text-sm block mt-3 mb-1">
                    Your Full Name:
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    className="rounded block w-full indent-2 h-8"
                    required
                  />
                </div>
                {/* Email */}
                <div className="row-span-2">
                  <label className="text-sm block mt-3 mb-1">Your Email:</label>
                  <input
                    type="email"
                    name="email"
                    className="rounded block w-full indent-2 h-8"
                    required
                  />
                </div>
                {/* Phone Number */}
                <div className="row-span-2">
                  <label className="text-sm block mt-3 mb-1">
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    name="phone-number"
                    className="rounded block w-full indent-2 h-8"
                    required
                  />
                </div>
                {/* Item Description */}
                <div className="row-span-3">
                  <label className="text-sm block mt-3 mb-1">
                    Item Description:
                  </label>
                  <textarea
                    wrap="soft"
                    name="item-description"
                    maxLength="150"
                    placeholder="150 characters max"
                    className="rounded block w-full indent-2 h-20 whitspace-normal"
                    required
                  />
                </div>
                {/* Special Requests/Additional Info */}
                <div className="row-span-3">
                  <label className="text-sm block mt-3 mb-1">
                    Special requests/additional information:
                  </label>
                  <textarea
                    wrap="soft"
                    name="extra-info"
                    maxLength="150"
                    placeholder="150 characters max"
                    className="rounded block w-full indent-2 h-20 whitspace-normal"
                  />
                </div>
              </div>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-5">
              <div className="bg-gray-200 rounded-xl p-5 mb-10">
                <h3 className="text-md mb-2 font-semibold">
                  Collection Address:
                </h3>
                <div className="">
                  {/* Collection Address Line 1 */}
                  <div className="">
                    <label className="text-sm block mt-3 mb-1">
                      Address Line 1:
                    </label>
                    <input
                      type="text"
                      name="col-addr-l1"
                      className="rounded block w-full indent-2 h-8"
                      required
                    />
                  </div>
                </div>
                <div className="">
                  {/* Collection Address Line 2 */}
                  <div className="">
                    <label className="text-sm block mt-3 mb-1">
                      Address Line 2:
                    </label>
                    <input
                      type="text"
                      name="col-addr-l2"
                      className="rounded block w-full indent-2 h-8"
                      required
                    />
                  </div>
                </div>
                <div className="">
                  {/* Collection Town/City */}
                  <div className="">
                    <label className="text-sm block mt-3 mb-1">
                      Town/City:
                    </label>
                    <input
                      type="text"
                      name="col-city"
                      className="rounded block w-full indent-2 h-8"
                      required
                    />
                  </div>
                </div>
                <div className="">
                  {/* Collection Postcode */}
                  <div className="">
                    <label className="text-sm block mt-3 mb-1">Postcode:</label>
                    <input
                      type="text"
                      name="col-postcode"
                      className="rounded block w-full indent-2 h-8"
                      required
                    />
                  </div>
                </div>
                <div className="">
                  {/* Collection Country */}
                  <div className="">
                    <label className="text-sm block mt-3 mb-1">Country:</label>
                    <input
                      type="text"
                      name="col-country"
                      className="rounded block w-full indent-2 h-8"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-200 rounded-xl p-5 mb-10">
                <h3 className="text-md mb-2 font-semibold">
                  Delivery Address:
                </h3>
                <div className="">
                  {/* Delivery Address Line 1 */}
                  <div className="">
                    <label className="text-sm block mt-3 mb-1">
                      Address Line 1:
                    </label>
                    <input
                      type="text"
                      name="del-addr-l1"
                      className="rounded block w-full indent-2 h-8"
                      required
                    />
                  </div>
                </div>
                <div className="">
                  {/* Delivery Address Line 2 */}
                  <div className="">
                    <label className="text-sm block mt-3 mb-1">
                      Address Line 2:
                    </label>
                    <input
                      type="text"
                      name="del-addr-l2"
                      className="rounded block w-full indent-2 h-8"
                      required
                    />
                  </div>
                </div>
                <div className="">
                  {/* Delivery Town/City */}
                  <div className="">
                    <label className="text-sm block mt-3 mb-1">
                      Town/City:
                    </label>
                    <input
                      type="text"
                      name="del-city"
                      className="rounded block w-full indent-2 h-8"
                      required
                    />
                  </div>
                </div>
                <div className="">
                  {/* Delivery Postcode */}
                  <div className="">
                    <label className="text-sm block mt-3 mb-1">Postcode:</label>
                    <input
                      type="text"
                      name="del-postcode"
                      className="rounded block w-full indent-2 h-8"
                      required
                    />
                  </div>
                </div>
                <div className="">
                  {/* Delivery Country */}
                  <div className="">
                    <label className="text-sm block mt-3 mb-1">Country:</label>
                    <input
                      type="text"
                      name="del-country"
                      className="rounded block w-full indent-2 h-8"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 rounded-xl p-5 mb-10">
              <div className="mx-2 my-2">
                <label className="text-sm block mt-3 mb-1">
                  <input type="checkbox" className="m-3" required></input>I
                  agree for my information to be used only by ACT National for
                  purposes relating to this enquiry{" "}
                </label>
              </div>
              <button
                type="submit"
                className="block bg-blue-800 text-white py-3 px-5 rounded hover:bg-blue-700 duration-500 text-sm sm:text-base text-center mb-4 mt-5 mx-4"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
