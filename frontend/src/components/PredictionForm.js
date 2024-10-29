// src/components/PredictionForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { InputField } from './InputField';
import { SelectField } from './SelectField';

export const PredictionForm = () => {
  const [formData, setFormData] = useState({
    age: '',
    sex: 'male',
    bmi: '',
    children: '0',
    smoker: 'no',
    region: 'northeast'
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:3001/api/predict', formData);
      setPrediction(response.data.predicted_price);
    } catch (err) {
      setError('Failed to get prediction. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="Age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            required
          />
          
          <SelectField
            label="Sex"
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            options={[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' }
            ]}
          />
          
          <InputField
            label="BMI"
            name="bmi"
            type="number"
            step="0.1"
            value={formData.bmi}
            onChange={handleChange}
            required
          />
          
          <InputField
            label="Number of Children"
            name="children"
            type="number"
            value={formData.children}
            onChange={handleChange}
            required
          />
          
          <SelectField
            label="Smoker"
            name="smoker"
            value={formData.smoker}
            onChange={handleChange}
            options={[
              { value: 'no', label: 'No' },
              { value: 'yes', label: 'Yes' }
            ]}
          />
          
          <SelectField
            label="Region"
            name="region"
            value={formData.region}
            onChange={handleChange}
            options={[
              { value: 'northeast', label: 'Northeast' },
              { value: 'northwest', label: 'Northwest' },
              { value: 'southeast', label: 'Southeast' },
              { value: 'southwest', label: 'Southwest' }
            ]}
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 
                     disabled:bg-blue-300 transition-colors duration-200"
          >
            {loading ? 'Calculating...' : 'Predict Insurance Price'}
          </button>
        </div>
      </form>

      {prediction && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
          <h3 className="text-lg font-semibold text-center text-green-800">
            Predicted Insurance Price: ${prediction.toFixed(2)}
          </h3>
        </div>
      )}

      {error && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-center text-red-600">{error}</p>
        </div>
      )}
    </div>
  );
};
