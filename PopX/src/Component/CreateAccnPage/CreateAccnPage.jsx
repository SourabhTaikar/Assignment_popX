import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateAccnPage() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailAddressChange = (e) => {
    setEmailAddress(e.target.value);
  };

  const handleSubmit = () => {
    navigate('/Profile', { state: { fullName, emailAddress } });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-4xl mb-6 text-center">Create Your PopX Account</h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={handleFullNameChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="phoneNumber">
              Phone number*
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phoneNumber" type="tel" placeholder="Enter your phone number"></input>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emailAddress">
              Email address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="emailAddress"
              type="email"
              placeholder="Enter your email address"
              value={emailAddress}
              onChange={handleEmailAddressChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password"></input>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="companyName">
              Company name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="companyName" type="text" placeholder="Enter your company name"></input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="agency">
              Are you an Agency?
            </label>
            <div className="flex">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="agency" id="agencyYes" value="option1"></input>
                <label className="form-check-label" for="agencyYes">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="agency" id="agencyNo" value="option2"></input>
                <label className="form-check-label" for="agencyNo">No</label>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAccnPage;
