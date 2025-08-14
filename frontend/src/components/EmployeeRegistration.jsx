import React, { useState } from 'react';

const EmployeeRegistration = () => {
  const [formData, setFormData] = useState({
    employeeId: '',
    nic: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle the form submission logic here
  };

  return (
    <div className="bg-blue-500 text-white">
      {/* Mountain SVG at the top */}
      <img
        src="/mountain.svg"  // Ensure the mountain SVG is in the public folder
        alt="Mountain"
        className="w-full h-48 object-cover"
      />

      <div className="max-w-lg mx-auto py-10 px-6 bg-white rounded-lg shadow-lg mt-8">
        <div className="flex justify-between mb-6">
          <a href="/" className="text-blue-500">← Back</a>
          <div className="text-blue-500">
            <button className="mr-4">Register</button>
            <button>Login</button>
          </div>
        </div>
        <h2 className="text-3xl font-semibold mb-6">Employee Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Enter Employee ID</label>
            <input
              type="text"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleChange}
              placeholder="Employee ID"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              required
            />
            <span className="text-red-500 text-xs">Please Enter Valid ID</span>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Enter NIC</label>
            <input
              type="text"
              name="nic"
              value={formData.nic}
              onChange={handleChange}
              placeholder="NIC"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              required
            />
            <span className="text-red-500 text-xs">Please Enter Valid NIC</span>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <div className="flex items-center">
              <select name="countryCode" className="p-3 border border-gray-300 rounded-l-md">
                <option value="+94">+94</option>
                {/* Add more country code options here */}
              </select>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded-r-md"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Enter Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john.doe@gmail.com"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Enter Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Verify Password"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeRegistration;