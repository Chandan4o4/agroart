import { useState } from "react";
import clientsDetails from "@/data/clientsDetails";
import { MdOutlineEdit, MdOutlineDeleteForever } from "react-icons/md";

const DataTable = () => {
  const [filter, setFilter] = useState("");
  const [selectedField, setSelectedField] = useState("");
  const [data, setData] = useState([...clientsDetails]);

  const handleFieldChange = (e: any) => {
    setSelectedField(e.target.value);
  };

  const handleFilterChange = (e: any) => {
    setFilter(e.target.value);
  };

  const filteredData = data.filter((row) => {
    const filterMatch =
      row.name.toLowerCase().includes(filter.toLowerCase()) ||
      row.contact.toLowerCase().includes(filter.toLowerCase()) ||
      row.city.toLowerCase().includes(filter.toLowerCase());

    if (selectedField) {
      return (
        filterMatch &&
        row.field.toLowerCase().includes(selectedField.toLowerCase())
      );
    }

    return filterMatch;
  });

  const handleEdit = (id: number) => {
    const rowIndex = data.findIndex((row) => row.id === id);
    if (rowIndex !== -1) {
      const updatedData = [...data];
      updatedData[rowIndex] = {
        ...updatedData[rowIndex],
        name: "Updated Name",
      };
      setData(updatedData);
    }
  };

  const handleDelete = (id: number) => {
    const updatedData = data.filter((row) => row.id !== id);
    setData(updatedData);
  };

  return (
    <>
      <div className="grid overflow-auto w-full p-2">
        <div className="border border-gray-300 p-2 mb-4 max-w-sm rounded">
          <label htmlFor="field"></label>
          <select
            name="field"
            id="field"
            value={selectedField}
            onChange={handleFieldChange}
            className="w-full focus-within:outline-none"
            required
          >
            <option value="">All Categories</option>
            <option value="architects">Architects</option>
            <option value="builders">Builders</option>
            <option value="contractors">Contractors</option>
            <option value="direct">Direct</option>
          </select>
        </div>

        <input
          type="text"
          placeholder="Filter by name, contact or city"
          value={filter}
          onChange={handleFilterChange}
          className="border border-gray-300 p-2 mb-4 max-w-sm rounded focus-within:outline-none"
        />

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 bg-gray-50 ">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">House Number</th>
                <th className="px-6 py-3">Area</th>
                <th className="px-6 py-3">City</th>
                <th className="px-6 py-3">State</th>
                <th className="px-6 py-3">Contact Number</th>
                <th className="px-6 py-3">AID</th>
                <th className="px-6 py-3">Website</th>
                <th className="px-6 py-3">Remarks</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Interested</th>
                <th className="px-6 py-3">Followup Date</th>
                <th className="px-6 py-3">Schedule Timing</th>
                <th className="px-6 py-3">Timeline</th>
                <th className="px-6 py-3">Catalog Send</th>
                <th className="px-6 py-3">Followup Remarks</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row) => (
                <tr key={row.id} className="bg-white border-b ">
                  <td className="border px-4 py-2">{row.id}</td>
                  <td className="border px-4 py-2">{row.name}</td>
                  <td className="border px-4 py-2">{row.house}</td>
                  <td className="border px-4 py-2">{row.area}</td>
                  <td className="border px-4 py-2">{row.city}</td>
                  <td className="border px-4 py-2">{row.state}</td>
                  <td className="border px-4 py-2">{row.contact}</td>
                  <td className="border px-4 py-2">{row.aid}</td>
                  <td className="border px-4 py-2">{row.website}</td>
                  <td className="border px-4 py-2">{row.remarks}</td>
                  <td className="border px-4 py-2">{row.date}</td>
                  <td className="border px-4 py-2">{row.interested}</td>
                  <td className="border px-4 py-2">{row.f_date}</td>
                  <td className="border px-4 py-2">{row.timing}</td>
                  <td className="border px-4 py-2">{row.timeline}</td>
                  <td className="border px-4 py-2">{row.catalog}</td>
                  <td className="border px-4 py-2">{row.f_remarks}</td>
                  <td className="border px-4 py-2 flex justify-center">
                    <button
                      onClick={() => handleEdit(row.id)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                    >
                      <MdOutlineEdit size={25} />
                    </button>
                    <button
                      onClick={() => handleDelete(row.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    >
                      <MdOutlineDeleteForever size={25} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DataTable;
