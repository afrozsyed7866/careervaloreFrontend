"use client";
import { useState, useEffect } from "react";
import { Eye, Trash2 } from "lucide-react";
import Link from "next/link";
import { fetchCardDetails } from "@/utils/apicall";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null; // Safely access localStorage

  // Fetch messages on component mount
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await fetchCardDetails(
          `${process.env.NEXT_PUBLIC_BASE_URL}/messages`,
          "get",
          null,
          token
        );
        setMessages(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof ApiError ? err.message : "An unknown error occurred");
        setLoading(false);
      }
    };
    fetchMessages();
  }, []);

  // Handle view message
  const handleView = (message) => {
    setSelectedMessage(message);
  };

  // Handle delete message (soft delete)
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this message?")) return;
    try {
      await fetchCardDetails(
        `${process.env.NEXT_PUBLIC_BASE_URL}/messages/${id}`,
        "delete",
        null,
        token
      );
      setMessages(messages.filter((msg) => msg._id !== id));
      alert("Message deleted successfully");
    } catch (err) {
      alert(`Error: ${err instanceof ApiError ? err.message : "An unknown error occurred"}`);
    }
  };

  // Close modal
  const closeModal = () => {
    setSelectedMessage(null);
  };

  // Truncate text utility
  const truncateText = (text, maxLength) => {
    if (!text || text.length <= maxLength) return text || "";
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <main className="flex-1">
        {/* Messages Table Section */}
        <section className="w-full bg-white">
          <div className="mx-auto px-4">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">All Messages</h2>
              {loading && <p className="text-gray-600">Loading messages...</p>}
              {error && <p className="text-red-600">Error: {error}</p>}
              {!loading && !error && messages.length === 0 && (
                <p className="text-gray-600">No messages found.</p>
              )}
              {!loading && !error && messages.length > 0 && (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-black">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                          Subject
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-white uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {messages.map((message) => (
                        <tr key={message._id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {message.firstName} {message.lastName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {truncateText(message.email, 20)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {truncateText(message.subject, 20)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(message.createdAt).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              onClick={() => handleView(message)}
                              className="text-blue-600 hover:text-blue-800 mr-4"
                              title="View"
                            >
                              <Eye className="h-5 w-5" />
                            </button>
                            <button
                              onClick={() => handleDelete(message._id)}
                              className="text-red-600 hover:text-red-800"
                              title="Delete"
                            >
                              <Trash2 className="h-5 w-5" />
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
        </section>

        {/* Modal for Viewing Message Details */}
        {selectedMessage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Message Details</h3>
              <div className="space-y-4">
                <p>
                  <span className="font-semibold">Name:</span>{" "}
                  {selectedMessage.firstName} {selectedMessage.lastName}
                </p>
                <p>
                  <span className="font-semibold">Email:</span> {selectedMessage.email}
                </p>
                <p>
                  <span className="font-semibold">Phone:</span>{" "}
                  {selectedMessage.phone || "N/A"}
                </p>
                <p>
                  <span className="font-semibold">Subject:</span> {selectedMessage.subject}
                </p>
                <p>
                  <span className="font-semibold">Message:</span>{" "}
                  {truncateText(selectedMessage.message)}
                </p>
                <p>
                  <span className="font-semibold">Date:</span>{" "}
                  {new Date(selectedMessage.createdAt).toLocaleString()}
                </p>
                {/* <p>
                  <span className="font-semibold">Status:</span> {selectedMessage.status}
                </p> */}
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}