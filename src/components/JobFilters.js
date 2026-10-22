"use client";
import React, { useState } from "react";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import { useRouter } from "next/navigation";

function JobFilters({ onFilterChange }) {
  const [filters, setFilters] = useState({
    type: [],
    sector: [],
    location: [],
    pinned: false,
  });
  const [error, setError] = useState(null); // For error handling
  const router = useRouter();

  // Filter options from controllers
  const jobTypes = [
    { value: "fulltime", label: "Fulltime" },
    { value: "parttime", label: "Parttime" },
    { value: "internship", label: "Internship" },
    { value: "contract", label: "Contract" },
    { value: "remote", label: "Remote" },
  ];
  const sectors = [
    { value: "IT", label: "IT" },
    { value: "Mechanical", label: "Mechanical" },
    { value: "Civil", label: "Civil" },
    { value: "Electronics", label: "Electronics" },
    { value: "Any Degree", label: "Any Degree" },
  ];

  // Fetch location suggestions from Nominatim API
  const fetchLocationSuggestions = async (query) => {
    if (!query || query.length < 3) {
      return [{ value: "remote", label: "Remote" }];
    }

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          query
        )}&format=json&addressdetails=1&limit=10`,
        {
          headers: {
            "User-Agent": "JobFiltersApp/1.0 (your.email@example.com)", // Replace with your app name and email
          },
        }
      );
      const data = await response.json();
      const suggestions = data.map((place) => ({
        value: place.display_name.toLowerCase().replace(/\s+/g, "-"), // e.g., "bengaluru-karnataka-india"
        label: place.display_name, // e.g., "Bengaluru, Karnataka, India"
      }));
      return [{ value: "remote", label: "Remote" }, ...suggestions];
    } catch (err) {
      console.error("Error fetching locations:", err);
      setError("Failed to fetch location suggestions");
      return [{ value: "remote", label: "Remote" }];
    }
  };

  const handleFilterChange = (filterName, selectedOptions) => {
    let newFilters;

    if (filterName === "all") {
      newFilters = { type: [], sector: [], location: [], pinned: false };
      setFilters(newFilters);
      onFilterChange(newFilters);
      router.push("/all-jobs");
    } else if (filterName === "pinned") {
      newFilters = { ...filters, pinned: !filters.pinned };
      setFilters(newFilters);
      onFilterChange(newFilters);
    } else {
      newFilters = {
        ...filters,
        [filterName]: selectedOptions ? selectedOptions.map((opt) => opt.value) : [],
      };
      setFilters(newFilters);
      onFilterChange(newFilters);
    }
  };

  return (
    <div className="flex flex-wrap gap-3 mt-3">
      {/* All Jobs Button */}
      <button
        onClick={() => handleFilterChange("all")}
        style={{ border: "1px solid #e5e7eb", backgroundColor: "white", color: "hsl(0, 0%, 50%)" ,borderRadius:"4px" }}
        className="inline-block px-3 py-1.5  hover:bg-gray-900 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
      >
        All Jobs
      </button>

      {/* Sector Multi-Select */}
      <div className="w-48">
        <Select
          isMulti
          options={sectors}
          value={sectors.filter((option) => filters.sector.includes(option.value))}
          onChange={(selected) => handleFilterChange("sector", selected)}
          placeholder="Select Sectors"
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>

      {/* Type Multi-Select */}
      <div className="w-48">
        <Select
          isMulti
          options={jobTypes}
          value={jobTypes.filter((option) => filters.type.includes(option.value))}
          onChange={(selected) => handleFilterChange("type", selected)}
          placeholder="Select Types"
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>

      {/* Location Async Multi-Select */}
      {/* <div className="w-48">
        <AsyncSelect
          isMulti
          cacheOptions
          defaultOptions={[{ value: "remote", label: "Remote" }]}
          loadOptions={fetchLocationSuggestions} // Correct prop for fetching options dynamically based on input change
          value={filters.location.map((val) => ({
            value: val,
            label: val.replace(/-/g, " "), // Convert back for display
          }))}
          onChange={(selected) => handleFilterChange("location", selected)}
          placeholder="Search Locations"
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div> */}

      {/* Pinned Toggle */}
      <button
        onClick={() => handleFilterChange("pinned")}
        style={{ border: "1px solid #e5e7eb", backgroundColor: "white", color: "hsl(0, 0%, 50%)" ,borderRadius:"4px" }}
        className={`inline-block px-3 py-1.5  transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 ${
          filters.pinned ? "bg-gray-900 text-white" : "hover:bg-gray-900"
        }`}
      >
        Trending job
      </button>

      {/* Optional Error Display */}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default JobFilters;
