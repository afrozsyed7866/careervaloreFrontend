"use client";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Paper,
  Typography,
  TextField,
  Switch,
  FormControlLabel,
} from "@mui/material";

export default function JobTable({ jobs, onDelete, onEdit }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedField, setSelectedField] = useState({ key: "", value: "" });
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [jobToDelete, setJobToDelete] = useState(null);

  const truncateText = (text, maxLength = 10) => {
    if (typeof text !== "string" || text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const handleMoreClick = (key, value) => {
    setSelectedField({ key, value });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedField({ key: "", value: "" });
  };

  const handleEditClick = (job) => {
    setEditingJob({
      ...job,
      description: Array.isArray(job.description) ? job.description : [job.description || ""],
      requirements: job.requirements || [""],
      rolesAndResponsibilities: job.rolesAndResponsibilities || [""],
      selectionProcess: job.selectionProcess || [""],
    });
    setEditDialogOpen(true);
  };

  const handleEditChange = (field, value, index) => {
    setEditingJob((prev) => {
      if (Array.isArray(prev[field])) {
        const newArray = [...prev[field]];
        newArray[index] = value;
        return { ...prev, [field]: newArray };
      }
      return { ...prev, [field]: value };
    });
  };

  const handleAddField = (field) => {
    setEditingJob((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  };

  const handleEditSubmit = () => {
    if (onEdit) {
      const updatedJob = {
        ...editingJob,
        description: editingJob.description.filter(Boolean),
        requirements: editingJob.requirements.filter(Boolean),
        rolesAndResponsibilities: editingJob.rolesAndResponsibilities.filter(Boolean),
        selectionProcess: editingJob.selectionProcess.filter(Boolean),
      };
      onEdit(updatedJob);
    } else {
      console.error("onEdit prop is not provided");
    }
    setEditDialogOpen(false);
    setEditingJob(null);
  };

  const handleEditClose = () => {
    setEditDialogOpen(false);
    setEditingJob(null);
  };

  const handleDeleteClick = (job) => {
    setJobToDelete(job);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (jobToDelete && onDelete) {
      onDelete(jobToDelete._id);
    }
    setDeleteDialogOpen(false);
    setJobToDelete(null);
  };

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
    setJobToDelete(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Shift") {
      // Allow Shift key functionality
    }
  };

  return (
    <>
      <TableContainer component={Paper} className="shadow-lg rounded-lg overflow-y-auto">
        <Table sx={{ minWidth: 650 }} aria-label="job table" className="bg-white">
          <TableHead className="bg-blue-600 text-white">
            <TableRow>
              {[
                "Title",
                "Company",
                "Image",
                "Location",
                "Description",
                "Requirements",
                "Type",
                "Sector",
                "Salary",
                "Deadline",
                "Active",
                "Created At",
                "Pinned",
                "Roles & Responsibilities",
                "Selection Process",
                "About Company",
                "Actions",
              ].map((header) => (
                <TableCell key={header} className="text-white font-semibold text-sm uppercase tracking-wide py-4">
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {jobs.map((job) => (
              <TableRow key={job._id} className="hover:bg-gray-50 transition-colors">
                <TableCell className="py-3">
                  <span className="text-gray-800">{truncateText(job.title)}</span>
                  {job.title.length > 10 && (
                    <Button
                      size="small"
                      onClick={() => handleMoreClick("Title", job.title)}
                      className="ml-2 text-blue-500 hover:text-blue-700 text-xs"
                    >
                      More
                    </Button>
                  )}
                </TableCell>
                <TableCell className="py-3">
                  <span className="text-gray-800">{truncateText(job.company)}</span>
                  {job.company.length > 10 && (
                    <Button
                      size="small"
                      onClick={() => handleMoreClick("Company", job.company)}
                      className="ml-2 text-blue-500 hover:text-blue-700 text-xs"
                    >
                      More
                    </Button>
                  )}
                </TableCell>
                <TableCell className="py-3">
                  <img
                    src={job.image}
                    alt="job"
                    className="w-12 h-12 object-cover rounded-md border border-gray-200"
                  />
                </TableCell>
                <TableCell className="py-3">
                  <span className="text-gray-800">{truncateText(job.location)}</span>
                  {job.location.length > 10 && (
                    <Button
                      size="small"
                      onClick={() => handleMoreClick("Location", job.location)}
                      className="ml-2 text-blue-500 hover:text-blue-700 text-xs"
                    >
                      More
                    </Button>
                  )}
                </TableCell>
                <TableCell className="py-3">
                  <span className="text-gray-800">
                    {truncateText(Array.isArray(job.description) ? job.description.join(", ") : job.description)}
                  </span>
                  {(Array.isArray(job.description) ? job.description.join(", ") : job.description).length > 10 && (
                    <Button
                      size="small"
                      onClick={() =>
                        handleMoreClick(
                          "Description",
                          Array.isArray(job.description) ? job.description.join(", ") : job.description
                        )
                      }
                      className="ml-2 text-blue-500 hover:text-blue-700 text-xs"
                    >
                      More
                    </Button>
                  )}
                </TableCell>
                <TableCell className="py-3">
                  <span className="text-gray-800">{truncateText(job.requirements.join(", "))}</span>
                  {job.requirements.join(", ").length > 10 && (
                    <Button
                      size="small"
                      onClick={() => handleMoreClick("Requirements", job.requirements.join(", "))}
                      className="ml-2 text-blue-500 hover:text-blue-700 text-xs"
                    >
                      More
                    </Button>
                  )}
                </TableCell>
                <TableCell className="py-3 text-gray-800">{job.type}</TableCell>
                <TableCell className="py-3">
                  <span className="text-gray-800">{truncateText(job.sector)}</span>
                  {job.sector.length > 10 && (
                    <Button
                      size="small"
                      onClick={() => handleMoreClick("Sector", job.sector)}
                      className="ml-2 text-blue-500 hover:text-blue-700 text-xs"
                    >
                      More
                    </Button>
                  )}
                </TableCell>
                <TableCell className="py-3">
                  <span className="text-gray-800">{truncateText(job.salary)}</span>
                  {job.salary.length > 10 && (
                    <Button
                      size="small"
                      onClick={() => handleMoreClick("Salary", job.salary)}
                      className="ml-2 text-blue-500 hover:text-blue-700 text-xs"
                    >
                      More
                    </Button>
                  )}
                </TableCell>
                <TableCell className="py-3">{new Date(job.applicationDeadline).toLocaleDateString()}</TableCell>
                <TableCell className="py-3">
                  {job.isActive ? <span className="text-green-600 font-medium">Yes</span> : <span className="text-red-600 font-medium">No</span>}
                </TableCell>
                <TableCell className="py-3">{new Date(job.createdAt).toLocaleDateString()}</TableCell>
                <TableCell className="py-3">
                  {job.pin ? <span className="text-blue-600 font-medium">Yes</span> : <span className="text-gray-600 font-medium">No</span>}
                </TableCell>
                <TableCell className="py-3">
                  <span className="text-gray-800">{truncateText(job.rolesAndResponsibilities.join(", "))}</span>
                  {job.rolesAndResponsibilities.join(", ").length > 10 && (
                    <Button
                      size="small"
                      onClick={() => handleMoreClick("Roles & Responsibilities", job.rolesAndResponsibilities.join(", "))}
                      className="ml-2 text-blue-500 hover:text-blue-700 text-xs"
                    >
                      More
                    </Button>
                  )}
                </TableCell>
                <TableCell className="py-3">
                  <span className="text-gray-800">{truncateText(job.selectionProcess.join(", "))}</span>
                  {job.selectionProcess.join(", ").length > 10 && (
                    <Button
                      size="small"
                      onClick={() => handleMoreClick("Selection Process", job.selectionProcess.join(", "))}
                      className="ml-2 text-blue-500 hover:text-blue-700 text-xs"
                    >
                      More
                    </Button>
                  )}
                </TableCell>
                <TableCell className="py-3">
                  <span className="text-gray-800">{truncateText(job.aboutCompany || "")}</span>
                  {(job.aboutCompany || "").length > 10 && (
                    <Button
                      size="small"
                      onClick={() => handleMoreClick("About Company", job.aboutCompany || "")}
                      className="ml-2 text-blue-500 hover:text-blue-700 text-xs"
                    >
                      More
                    </Button>
                  )}
                </TableCell>
                <TableCell className="py-3 flex gap-2">
                  <Button
                    variant="outlined"
                    onClick={() => handleEditClick(job)}
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 text-xs font-medium"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => handleDeleteClick(job)}
                    className="border-red-600 text-red-600 hover:bg-red-50 text-xs font-medium"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={handleCloseDialog} className="max-w-md mx-auto">
        <DialogTitle className="text-lg font-bold text-gray-800 bg-gray-100 py-4">{selectedField.key}</DialogTitle>
        <DialogContent className="p-6">
          <Typography className="text-gray-700 leading-relaxed">{selectedField.value}</Typography>
        </DialogContent>
        <DialogActions className="px-6 pb-4">
          <Button
            onClick={handleCloseDialog}
            className="text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-md text-sm font-medium"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={deleteDialogOpen} onClose={handleDeleteCancel} className="max-w-md mx-auto">
        <DialogTitle className="text-lg font-bold text-gray-800 bg-gray-100 py-4">Confirm Deletion</DialogTitle>
        <DialogContent className="p-6">
          <Typography className="text-gray-700 leading-relaxed">
            Are you sure you want to delete the job "{jobToDelete?.title}"?
          </Typography>
        </DialogContent>
        <DialogActions className="px-6 pb-4">
          <Button
            onClick={handleDeleteCancel}
            className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium"
          >
            Cancel
          </Button>
          <Button
            onClick={handleDeleteConfirm}
            className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium"
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      {editingJob && (
        <Dialog open={editDialogOpen} onClose={handleEditClose} className="max-w-2xl mx-auto">
          <DialogTitle className="text-xl font-bold text-blue-700 bg-gray-100 py-4">Edit Job</DialogTitle>
          <DialogContent className="p-6 space-y-4">
            <TextField
              label="Title"
              value={editingJob.title}
              onChange={(e) => handleEditChange("title", e.target.value)}
              fullWidth
              margin="normal"
              onKeyDown={handleKeyDown}
              className="rounded-lg"
              InputProps={{
                className: "border-gray-300 focus:border-blue-500",
              }}
            />
            <TextField
              label="Company"
              value={editingJob.company}
              onChange={(e) => handleEditChange("company", e.target.value)}
              fullWidth
              margin="normal"
              onKeyDown={handleKeyDown}
              className="rounded-lg"
              InputProps={{
                className: "border-gray-300 focus:border-blue-500",
              }}
            />
            <TextField
              label="Image URL"
              value={editingJob.image || ""}
              onChange={(e) => handleEditChange("image", e.target.value)}
              fullWidth
              margin="normal"
              onKeyDown={handleKeyDown}
              className="rounded-lg"
              InputProps={{
                className: "border-gray-300 focus:border-blue-500",
              }}
            />
            <TextField
              label="Location"
              value={editingJob.location}
              onChange={(e) => handleEditChange("location", e.target.value)}
              fullWidth
              margin="normal"
              onKeyDown={handleKeyDown}
              className="rounded-lg"
              InputProps={{
                className: "border-gray-300 focus:border-blue-500",
              }}
            />
            <Typography className="text-md font-semibold text-gray-600 mt-4">Description</Typography>
            {editingJob.description.map((desc, index) => (
              <TextField
                key={index}
                value={desc}
                onChange={(e) => handleEditChange("description", e.target.value, index)}
                fullWidth
                margin="normal"
                multiline
                rows={3}
                onKeyDown={handleKeyDown}
                className="rounded-lg"
                InputProps={{
                  className: "border-gray-300 focus:border-blue-500",
                }}
              />
            ))}
            <Button
              onClick={() => handleAddField("description")}
              className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-semibold"
            >
              + Add Description
            </Button>

            <Typography className="text-md font-semibold text-gray-600 mt-4">Requirements</Typography>
            {editingJob.requirements.map((req, index) => (
              <TextField
                key={index}
                value={req}
                onChange={(e) => handleEditChange("requirements", e.target.value, index)}
                fullWidth
                margin="normal"
                onKeyDown={handleKeyDown}
                className="rounded-lg"
                InputProps={{
                  className: "border-gray-300 focus:border-blue-500",
                }}
              />
            ))}
            <Button
              onClick={() => handleAddField("requirements")}
              className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-semibold"
            >
              + Add Requirement
            </Button>

            <TextField
              label="Type"
              value={editingJob.type}
              onChange={(e) => handleEditChange("type", e.target.value)}
              fullWidth
              margin="normal"
              onKeyDown={handleKeyDown}
              className="rounded-lg"
              InputProps={{
                className: "border-gray-300 focus:border-blue-500",
              }}
            />
            <TextField
              label="Sector"
              value={editingJob.sector}
              onChange={(e) => handleEditChange("sector", e.target.value)}
              fullWidth
              margin="normal"
              onKeyDown={handleKeyDown}
              className="rounded-lg"
              InputProps={{
                className: "border-gray-300 focus:border-blue-500",
              }}
            />
            <TextField
              label="Salary"
              value={editingJob.salary}
              onChange={(e) => handleEditChange("salary", e.target.value)}
              fullWidth
              margin="normal"
              onKeyDown={handleKeyDown}
              className="rounded-lg"
              InputProps={{
                className: "border-gray-300 focus:border-blue-500",
              }}
            />
            <TextField
              label="Application Deadline"
              type="date"
              value={new Date(editingJob.applicationDeadline).toISOString().split("T")[0]}
              onChange={(e) => handleEditChange("applicationDeadline", new Date(e.target.value).toISOString())}
              fullWidth
              margin="normal"
              onKeyDown={handleKeyDown}
              className="rounded-lg"
              InputProps={{
                className: "border-gray-300 focus:border-blue-500",
              }}
            />
            <Typography className="text-md font-semibold text-gray-600 mt-4">Roles and Responsibilities</Typography>
            {editingJob.rolesAndResponsibilities.map((role, index) => (
              <TextField
                key={index}
                value={role}
                onChange={(e) => handleEditChange("rolesAndResponsibilities", e.target.value, index)}
                fullWidth
                margin="normal"
                onKeyDown={handleKeyDown}
                className="rounded-lg"
                InputProps={{
                  className: "border-gray-300 focus:border-blue-500",
                }}
              />
            ))}
            <Button
              onClick={() => handleAddField("rolesAndResponsibilities")}
              className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-semibold"
            >
              + Add Role
            </Button>

            <Typography className="text-md font-semibold text-gray-600 mt-4">Selection Process</Typography>
            {editingJob.selectionProcess.map((process, index) => (
              <TextField
                key={index}
                value={process}
                onChange={(e) => handleEditChange("selectionProcess", e.target.value, index)}
                fullWidth
                margin="normal"
                onKeyDown={handleKeyDown}
                className="rounded-lg"
                InputProps={{
                  className: "border-gray-300 focus:border-blue-500",
                }}
              />
            ))}
            <Button
              onClick={() => handleAddField("selectionProcess")}
              className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-semibold"
            >
              + Add Process
            </Button>

            <TextField
              label="About Company"
              value={editingJob.aboutCompany || ""}
              onChange={(e) => handleEditChange("aboutCompany", e.target.value)}
              fullWidth
              margin="normal"
              multiline
              rows={3}
              onKeyDown={handleKeyDown}
              className="rounded-lg"
              InputProps={{
                className: "border-gray-300 focus:border-blue-500",
              }}
            />
            <TextField
              label="Job Link"
              value={editingJob.jobLink || ""}
              onChange={(e) => handleEditChange("jobLink", e.target.value)}
              fullWidth
              margin="normal"
              multiline
              onKeyDown={handleKeyDown}
              className="rounded-lg"
              InputProps={{
                className: "border-gray-300 focus:border-blue-500",
              }}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={editingJob.isActive}
                  onChange={(e) => handleEditChange("isActive", e.target.checked)}
                  className="text-blue-600"
                />
              }
              label="Active"
              className="text-gray-700"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={editingJob.pin}
                  onChange={(e) => handleEditChange("pin", e.target.checked)}
                  className="text-blue-600"
                />
              }
              label="Pinned"
              className="text-gray-700"
            />
          </DialogContent>
          <DialogActions className="px-6 pb-4">
            <Button
              onClick={handleEditClose}
              className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium"
            >
              Cancel
            </Button>
            <Button
              onClick={handleEditSubmit}
              className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium"
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}