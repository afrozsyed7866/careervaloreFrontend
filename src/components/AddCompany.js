"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchCardDetails } from "../utils/apicall";
import { Image } from "lucide-react";
import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";

export default function AddCompany() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [aboutCompany, setAboutCompany] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [openImageDialog, setOpenImageDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    if (openSnackbar) {
      const timer = setTimeout(() => setOpenSnackbar(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [openSnackbar]);

  const validateForm = () => {
    if (!name || name.trim() === "") return "Please fill in the required field: Company Name";
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
      const companyData = {
        name,
        image,
        aboutCompany,
      };

      const response = await fetchCardDetails(
        `${process.env.NEXT_PUBLIC_BASE_URL}/companies`,
        "POST",
        companyData,
        token
      );

      setSuccess(response.message || "Company added successfully");
      setAlertType("success");
      setOpenSnackbar(true);

      // Reset form
      setName("");
      setImage("");
      setAboutCompany("");
    } catch (err) {
      const errorMsg = err.response?.data?.message || "An error occurred while adding the company";
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
          <h2 className="text-2xl font-semibold text-blue-600">Add New Company</h2>
          <p className="text-sm text-gray-600">
            Required fields are marked with <span className="text-red-500">*</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Company Name *</label>
            <TextField
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1"
              variant="outlined"
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Company Logo URL</label>
              <TextField
                fullWidth
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="mt-1"
                variant="outlined"
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
              />
            </div>
            <Button
              variant="outlined"
              onClick={() => setOpenImageDialog(true)}
              disabled={!image}
              className="mt-6"
              startIcon={<Image size={18} />}
            >
              Preview
            </Button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">About Company</label>
            <TextField
              fullWidth
              multiline
              rows={4}
              value={aboutCompany}
              onChange={(e) => setAboutCompany(e.target.value)}
              className="mt-1"
              variant="outlined"
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
            />
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              sx={{ borderRadius: "8px", padding: "8px 24px" }}
            >
              {isSubmitting ? "Adding Company..." : "Add Company"}
            </Button>
          </div>
        </form>
      </div>

      {/* Image Preview Dialog */}
      <Dialog open={openImageDialog} onClose={() => setOpenImageDialog(false)}>
        <DialogTitle>Image Preview</DialogTitle>
        <DialogContent>
          {image ? (
            <img
              src={image}
              alt="Company logo preview"
              className="max-w-full max-h-80 object-contain rounded"
              onError={() => {
                setError("Failed to load image. Please check the URL.");
                setAlertType("error");
                setOpenSnackbar(true);
              }}
            />
          ) : (
            <p className="text-gray-600">No image URL provided</p>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenImageDialog(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

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