"use client";
import { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const weightKg = parseFloat(weight);
    const heightM = parseFloat(height) / 100; // Convert cm to meters

    if (!weightKg || !heightM || heightM <= 0) {
      alert("Please enter valid weight and height values.");
      return;
    }

    const bmiValue = weightKg / (heightM * heightM);
    setBmi(bmiValue.toFixed(2));

    // Determine BMI category
    if (bmiValue < 18.5) setCategory("Underweight");
    else if (bmiValue >= 18.5 && bmiValue < 24.9) setCategory("Normal weight");
    else if (bmiValue >= 25 && bmiValue < 29.9) setCategory("Overweight");
    else setCategory("Obese");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="max-w-lg w-full mx-4 space-y-8">
    

        {/* Calculator Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">BMI Calculator</h2>

          {/* Input Fields */}
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Weight (kg)</label>
              <input
                type="number"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter weight"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Height (cm)</label>
              <input
                type="number"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter height"
              />
            </div>
          </div>

          {/* Calculate Button */}
          <button
            className="w-full mt-6 text-center bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
            onClick={calculateBMI}
          >
            Calculate BMI
          </button>

          {/* Result Display */}
          {bmi && (
            <div className="mt-6 p-4 bg-gray-50 rounded-md text-center">
              <p className="text-lg font-semibold text-gray-800">Your BMI: <span className="text-blue-600">{bmi}</span></p>
              <p className="text-md text-gray-600 mt-1 ">Category: <span className="font-medium">{category}</span></p>
            </div>
          )}


              {/* About BMI */}
        <div className="bg-white p-6 rounded-lg ">
          <h3 className="text-xl font-bold text-gray-800 mb-3">What is BMI?</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Body Mass Index (BMI) is a measure of body fat based on your weight and height. It’s a simple calculation used to assess whether a person has a healthy body weight for their height.
          </p>
        </div>

        {/* Uses of BMI */}
        <div className="bg-white p-6 rounded-lg ">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Uses of BMI</h3>
          <ul className="text-gray-600 text-sm list-disc list-inside space-y-2">
            <li>Screening tool to identify potential weight problems.</li>
            <li>Helps doctors assess risks for conditions like heart disease, diabetes, and more.</li>
            <li>Guides individuals in maintaining a healthy lifestyle.</li>
            <li>Used in population studies to track obesity trends.</li>
          </ul>
        </div>
        </div>


      </div>
    </div>
  );
};

export default BMICalculator;