// with base64  convertion
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchCardDetails } from "../../../utils/apicall";
import { Image } from "lucide-react";

export default function AddJob() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [image, setImage] = useState(null); // Changed to store the file object
  const [base64Image, setBase64Image] = useState(""); // Store Base64 string
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState([""]);
  const [requirements, setRequirements] = useState([""]);
  const [type, setType] = useState("");
  const [sector, setSector] = useState("");
  const [salary, setSalary] = useState("");
  const [applicationDeadline, setApplicationDeadline] = useState("");
  const [jobLink, setJobLink] = useState("");
  const [aboutCompany, setAboutCompany] = useState("");
  const [rolesAndResponsibilities, setRolesAndResponsibilities] = useState([""]);
  const [selectionProcess, setSelectionProcess] = useState([""]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [openImageDialog, setOpenImageDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (openSnackbar) {
      const timer = setTimeout(() => {
        setOpenSnackbar(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [openSnackbar]);

  const router = useRouter();
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  // Handle file input change and convert to Base64
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64Image(reader.result); // Base64 string
      };
      reader.onerror = () => {
        setError("Failed to read the image file.");
        setAlertType("error");
        setOpenSnackbar(true);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setBase64Image("");
    }
  };

  const addField = (setter, array) => setter([...array, ""]);
  const updateField = (setter, array, index, value) => {
    const newArray = [...array];
    newArray[index] = value;
    setter(newArray);
  };

  const validateForm = () => {
    const requiredFields = {
      "Job Title": title,
      Company: company,
      Location: location,
      "Job Description": description[0],
      "Job Type": type,
      Sector: sector,
    };
    for (const [fieldName, value] of Object.entries(requiredFields)) {
      if (!value || value.trim() === "") return `Please fill in the required field: ${fieldName}`;
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setAlertType("error");
      setOpenSnackbar(true);
      return;
    }

    setIsSubmitting(true);
    try {
      const jobData = {
        title,
        company,
        location,
        image: base64Image, // Send Base64 string
        description: description.filter(Boolean),
        requirements: requirements.filter(Boolean),
        type,
        sector,
        salary,
        applicationDeadline: applicationDeadline ? new Date(applicationDeadline) : null,
        jobLink,
        aboutCompany,
        rolesAndResponsibilities: rolesAndResponsibilities.filter(Boolean),
        selectionProcess: selectionProcess.filter(Boolean),
      };

      const response = await fetchCardDetails(
        `${process.env.NEXT_PUBLIC_BASE_URL}/jobs/`,
        "POST",
        jobData,
        token
      );

      setSuccess(response.message || "Job added successfully");
      setAlertType("success");
      setOpenSnackbar(true);

      // Reset form
      setTitle("");
      setCompany("");
      setLocation("");
      setImage(null);
      setBase64Image("");
      setDescription([""]);
      setRequirements([""]);
      setType("");
      setSector("");
      setSalary("");
      setApplicationDeadline("");
      setJobLink("");
      setAboutCompany("");
      setRolesAndResponsibilities([""]);
      setSelectionProcess([""]);
    } catch (err) {
      const errorMsg = err.response?.data?.error || "An error occurred while adding the job";
      setError(errorMsg);
      setAlertType("error");
      setOpenSnackbar(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto py-4 px-2" style={{ margin: "0 5%" }}>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-blue-600">Add New Job</h2>
          <p className="text-sm text-gray-600">
            Required fields are marked with <span className="text-red-500">*</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Job Title *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                style={{ border: "1px solid black" }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Company *</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                style={{ border: "1px solid black" }}
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Company Logo</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                style={{ border: "1px solid black" }}
              />
            </div>
            <button
              type="button"
              onClick={() => setOpenImageDialog(true)}
              disabled={!base64Image}
              className="mt-6 px-4 py-2 border rounded-md text-blue-600 disabled:text-gray-400 disabled:border-gray-300 hover:bg-blue-50"
            >
              <Image className="inline-block mr-2" size={18} />
              Preview
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Location *</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                style={{ border: "1px solid black" }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Salary</label>
              <input
                type="text"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                style={{ border: "1px solid black" }}
              />
            </div>
          </div>

          {/* Job Description */}
          <div>
            <h3 className="text-lg font-medium text-gray-800">Job Description *</h3>
            {description.map((desc, index) => (
              <div key={index} className="flex items-center gap-2 mt-2">
                <textarea
                  value={desc}
                  onChange={(e) => updateField(setDescription, description, index, e.target.value)}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={2}
                  placeholder={`Description ${index + 1}${index === 0 ? " *" : ""}`}
                  style={{ border: "1px solid black" }}
                />
                {index === description.length - 1 && (
                  <button
                    type="button"
                    onClick={() => addField(setDescription, description)}
                    className="p-2 text-blue-600 hover:text-blue-800"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Requirements */}
          <div>
            <h3 className="text-lg font-medium text-gray-800">Requirements</h3>
            {requirements.map((req, index) => (
              <div key={index} className="flex items-center gap-2 mt-2">
                <input
                  type="text"
                  value={req}
                  onChange={(e) => updateField(setRequirements, requirements, index, e.target.value)}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={`Requirement ${index + 1}`}
                  style={{ border: "1px solid black" }}
                />
                {index === requirements.length - 1 && (
                  <button
                    type="button"
                    onClick={() => addField(setRequirements, requirements)}
                    className="p-2 text-blue-600 hover:text-blue-800"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Job Type *</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                style={{ border: "1px solid black" }}
              >
                <option value="">Select Job Type</option>
                <option value="fulltime">Full-Time</option>
                <option value="parttime">Part-Time</option>
                <option value="internship">Internship</option>
                <option value="contract">Contract</option>
                <option value="remote">Remote</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Sector *</label>
              <input
                type="text"
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                style={{ border: "1px solid black" }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Application Deadline</label>
              <input
                type="date"
                value={applicationDeadline}
                onChange={(e) => setApplicationDeadline(e.target.value)}
                className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                style={{ border: "1px solid black" }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Job Application Link</label>
              <input
                type="text"
                value={jobLink}
                onChange={(e) => setJobLink(e.target.value)}
                className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                style={{ border: "1px solid black" }}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">About Company</label>
            <textarea
              value={aboutCompany}
              onChange={(e) => setAboutCompany(e.target.value)}
              className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={2}
              style={{ border: "1px solid black" }}
            />
          </div>

          {/* Roles and Responsibilities */}
          <div>
            <h3 className="text-lg font-medium text-gray-800">Roles and Responsibilities</h3>
            {rolesAndResponsibilities.map((role, index) => (
              <div key={index} className="flex items-center gap-2 mt-2">
                <input
                  type="text"
                  value={role}
                  onChange={(e) => updateField(setRolesAndResponsibilities, rolesAndResponsibilities, index, e.target.value)}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={`Role ${index + 1}`}
                  style={{ border: "1px solid black" }}
                />
                {index === rolesAndResponsibilities.length - 1 && (
                  <button
                    type="button"
                    onClick={() => addField(setRolesAndResponsibilities, rolesAndResponsibilities)}
                    className="p-2 text-blue-600 hover:text-blue-800"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Selection Process */}
          <div>
            <h3 className="text-lg font-medium text-gray-800">Selection Process</h3>
            {selectionProcess.map((step, index) => (
              <div key={index} className="flex items-center gap-2 mt-2">
                <input
                  type="text"
                  value={step}
                  onChange={(e) => updateField(setSelectionProcess, selectionProcess, index, e.target.value)}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={`Step ${index + 1}`}
                  style={{ border: "1px solid black" }}
                />
                {index === selectionProcess.length - 1 && (
                  <button
                    type="button"
                    onClick={() => addField(setSelectionProcess, selectionProcess)}
                    className="p-2 text-blue-600 hover:text-blue-800"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400"
            >
              {isSubmitting ? "Adding Job..." : "Add Job"}
            </button>
          </div>
        </form>
      </div>

      {/* Image Preview Dialog */}
      {openImageDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <h3 className="text-lg font-medium mb-4">Image Preview</h3>
            {base64Image ? (
              <img
                src={base64Image}
                alt="Company logo preview"
                className="max-w-full max-h-80 object-contain rounded"
              />
            ) : (
              <p className="text-gray-600">No image selected</p>
            )}
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setOpenImageDialog(false)}
                className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Snackbar */}
      {openSnackbar && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 max-w-md w-full" style={{ zIndex: 190 }}>
          <div
            className={`p-4 rounded-md shadow-lg ${
              alertType === "success" ? "bg-green-500" : "bg-red-500"
            } text-white`}
          >
            {alertType === "success" ? success : error}
            <button
              onClick={() => setOpenSnackbar(false)}
              className="ml-4 text-white hover:text-gray-200"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}