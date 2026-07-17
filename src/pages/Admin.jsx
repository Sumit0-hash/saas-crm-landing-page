import { useEffect, useState } from "react";
import { getAllInquiries, deleteInquiry } from "../services/api";

export default function Admin() {
  const [inquiries, setInquiries] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchInquiries = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getAllInquiries();
      setInquiries(response.data);
    } catch (err) {
      console.error(err);
      setError("Unable to load inquiries.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this inquiry?"
    );

    if (!confirmDelete) return;

    try {
      await deleteInquiry(id);
      fetchInquiries();
    } catch (err) {
      console.error(err);
      alert("Failed to delete inquiry.");
    }
  };

  const filteredInquiries = inquiries.filter((item) => {
    const searchTerm = search.toLowerCase();

    return (
      item.fullName.toLowerCase().includes(searchTerm) ||
      item.companyName.toLowerCase().includes(searchTerm) ||
      item.email.toLowerCase().includes(searchTerm)
    );
  });

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center text-xl">
        Loading inquiries...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center text-red-600 text-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-2">
          Admin Dashboard
        </h1>

        <p className="text-slate-500 mb-6">
          Total Inquiries: <strong>{inquiries.length}</strong>
        </p>

        <input
          type="text"
          placeholder="Search by name, company or email..."
          className="w-full rounded-lg border p-3 mb-6 dark:bg-slate-900"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {filteredInquiries.length === 0 ? (
          <div className="rounded-lg border bg-white dark:bg-slate-900 p-10 text-center">
            No inquiries found.
          </div>
        ) : (
          <div className="overflow-x-auto rounded-lg shadow">

            <table className="min-w-full bg-white dark:bg-slate-900">

              <thead className="bg-slate-100 dark:bg-slate-800">

                <tr>

                  <th className="p-3 text-left">Name</th>

                  <th className="p-3 text-left">Company</th>

                  <th className="p-3 text-left">Email</th>

                  <th className="p-3 text-left">Phone</th>

                  <th className="p-3 text-left">Country</th>

                  <th className="p-3 text-left">Industry</th>

                  <th className="p-3 text-left">Company Size</th>

                  <th className="p-3 text-left">Message</th>

                  <th className="p-3 text-left">Submitted</th>

                  <th className="p-3 text-center">Action</th>

                </tr>

              </thead>

              <tbody>

                {filteredInquiries.map((item) => (

                  <tr
                    key={item._id}
                    className="border-b hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                  >

                    <td className="p-3">{item.fullName}</td>

                    <td className="p-3">{item.companyName}</td>

                    <td className="p-3">{item.email}</td>

                    <td className="p-3">{item.phone}</td>

                    <td className="p-3">{item.country}</td>

                    <td className="p-3">{item.industry}</td>

                    <td className="p-3">{item.companySize}</td>

                    <td className="p-3 max-w-xs">
                      <div className="line-clamp-2">
                        {item.message}
                      </div>
                    </td>

                    <td className="p-3 whitespace-nowrap">
                      {new Date(item.createdAt).toLocaleString()}
                    </td>

                    <td className="p-3 text-center">

                      <button
                        onClick={() => handleDelete(item._id)}
                        className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700 transition"
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>
        )}

      </div>

    </div>
  );
}