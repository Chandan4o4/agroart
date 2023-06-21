import React from "react";

export default function AddNewClientForm() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-xl sm:text-2xl tracking-tight font-semibold text-center text-gray-900 dark:text-white">
          Client Details
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="category"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Select a Category
            </label>
            <select
              name="category"
              id="category"
              required
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            >
              <option value="" selected disabled defaultValue={""}>
                Select an option
              </option>
              <option value="architecture">Architects</option>
              <option value="builders">Builders</option>
              <option value="contractors">Contractors</option>
              <option value="direct">Direct</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="name"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="i.e. John Doe"
              required
            />
          </div>
          <div className="grid md:grid-cols-2 md:gap-4">
            <div>
              <label
                htmlFor="house"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                House Number
              </label>
              <input
                type="text"
                id="house"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder=""
              />
            </div>
            <div>
              <label
                htmlFor="area"
                className="block mb-1 mt-4 md:mt-0 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Area
              </label>
              <input
                type="text"
                id="area"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder=""
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-4">
            <div>
              <label
                htmlFor="city"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder=""
              />
            </div>
            <div>
              <label
                htmlFor="state"
                className="block mb-1 mt-4 md:mt-0 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder=""
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-4">
            <div>
              <label
                htmlFor="phone"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Contact Number
              </label>
              <input
                type="text"
                id="phone"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="i.e 9876543210"
                required
              />
            </div>
            <div>
              <label
                htmlFor="aid"
                className="block mb-1 mt-4 md:mt-0 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                AID
              </label>
              <input
                type="text"
                id="aid"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder=""
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="website"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Website
            </label>
            <input
              type="text"
              id="website"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder=""
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="remarks"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Remarks
            </label>
            <textarea
              id="remarks"
              rows={3}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>

          <div className="grid md:grid-cols-2 md:gap-4">
            <div>
              <label
                htmlFor="date"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="i.e 9876543210"
              />
            </div>

            <div>
              <label
                htmlFor="interest"
                className="block mb-1 mt-4 md:mt-0 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Interested
              </label>
              <input
                type="text"
                id="interest"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder=""
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-4">
            <div>
              <label
                htmlFor="follow_up_date"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Followup Date
              </label>
              <input
                type="text"
                id="follow_up_date"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder=""
              />
            </div>
            <div>
              <label
                htmlFor="timing"
                className="block mb-1 mt-4 md:mt-0 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Schedule Timing
              </label>
              <input
                type="text"
                id="timing"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder=""
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-4">
            <div>
              <label
                htmlFor="timeline"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Timeline
              </label>
              <input
                type="text"
                id="timeline"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder=""
              />
            </div>
            <div>
              <label
                htmlFor="catalog"
                className="block mb-1 mt-4 md:mt-0 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Catalog Send
              </label>
              <input
                type="text"
                id="catalog"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder=""
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="f_remarks"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Followup Remarks
            </label>
            <textarea
              id="f_remarks"
              rows={3}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white bg-green-600 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Save
          </button>
        </form>
      </div>
    </section>
  );
}
