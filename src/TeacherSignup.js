import React, { useState } from 'react';
import { TextField, Button, Typography, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
//import { auth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

const TeacherSignup = ({ onCancel, onNext }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    email: '',
    confirmEmail: '',
    organizationType: '',
    organizationName: '',
    role: '',
    phoneNumber: '',
  });

  const [page, setPage] = useState(1);
  const [isNextEnabled, setNextEnabled] = useState(false);
  const [validationWarning, setValidationWarning] = useState('');

  const handleChange = (field) => (event) => {
    const updatedFormData = { ...formData, [field]: event.target.value };
    setFormData(updatedFormData);
    validateForm(updatedFormData);
  };

  const validateForm = (data) => {
    // Validate the form fields based on the current page

    if (page === 1) {
      // Validate fields for the first part of the form
      const isFirstNameFilled = data.firstName !== '';
      const isLastNameFilled = data.lastName !== '';
      const isPasswordFilled = data.password !== '';
      const isConfirmPasswordFilled = data.confirmPassword !== '';
      const isEmailFilled = data.email !== '';
      const isConfirmEmailFilled = data.confirmEmail !== '';

      setValidationWarning('');

      setNextEnabled(
        isFirstNameFilled &&
        isLastNameFilled &&
        isPasswordFilled &&
        isConfirmPasswordFilled &&
        isEmailFilled &&
        isConfirmEmailFilled
      );
    } else if (page === 2) {
      // Validate fields for the second part of the form
      const isOrganizationTypeFilled = data.organizationType !== '';
      const isOrganizationNameFilled = data.organizationName !== '';
      const isRoleFilled = data.role !== '';
      const isPhoneNumberFilled = data.phoneNumber !== '';

      setValidationWarning('');

      setNextEnabled(
        isOrganizationTypeFilled &&
        isOrganizationNameFilled &&
        isRoleFilled &&
        isPhoneNumberFilled
      );
    }
  };

  const handleNext = () => {
    // Move to the next page
    setPage(2);
  };

  const handleBack = () => {
    // Move back to the previous page
    setPage(1);
  };
  /*const [values,setValues]=useState({
    email :"",
    password:"",

  });*/

  const handleJoin = async () => {
    // try {
    //   // Create a new user account
    //   const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
  
    //   // Send email verification
    //   await sendEmailVerification(auth.currentUser);
  
    //   // Display a congratulations modal or navigate to the next step
    //   // (You can use state or a library like React Modal for this)
    // } catch (error) {
    //   console.error('Error signing up:', error.message);
    //   // Handle signup error (e.g., display an error message to the user)
    // }
  };
  
  
  

  return (
    <Box
      sx={{
        width: '400px',
        margin: '0',
        padding: '5px',
        border: '2px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0px 0px 10px 0px #ccc',
      }}
    >
      <Typography variant="h5" gutterBottom>
        {page === 1 ? 'Create New Teacher Account (Part 1)' : 'Create New Teacher Account (Part 2)'}
      </Typography>
      <form>
        {page === 1 && (
          <>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.firstName}
              onChange={handleChange('firstName')}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.lastName}
              onChange={handleChange('lastName')}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.password}
              onChange={handleChange('password')}
              //onChange={(event)=>setValues((prev)=>({...prev,password:event.target.value}))}
            />
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.confirmPassword}
              onChange={handleChange('confirmPassword')}
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.email}
              onChange={handleChange('email')}
              //onChange={(event)=>setValues((prev)=>({...prev,email:event.target.value}))}
            />
            <TextField
              label="Confirm Email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.confirmEmail}
              onChange={handleChange('confirmEmail')}
            />
          </>
        )}
        {page === 2 && (
          <>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel id="organization-type-label">Organization Type</InputLabel>
              <Select
                labelId="organization-type-label"
                label="Organization Type"
                value={formData.organizationType}
                onChange={handleChange('organizationType')}
              >
                <MenuItem value="primary-secondary">Primary-Secondary</MenuItem>
                <MenuItem value="university">University</MenuItem>
                <MenuItem value="corporate">Corporate</MenuItem>
                <MenuItem value="personal">Personal</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Organization Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.organizationName}
              onChange={handleChange('organizationName')}
            />
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel id="role-label">Role</InputLabel>
              <Select
                labelId="role-label"
                label="Role"
                value={formData.role}
                onChange={handleChange('role')}
              >
                <MenuItem value="teacher">Teacher</MenuItem>
                <MenuItem value="it-technology">IT/Tecnology</MenuItem>
                <MenuItem value="administrative">Administrative</MenuItem>
                <MenuItem value="others">Others</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.phoneNumber}
              onChange={(event) => {
                const numericValue = event.target.value.replace(/[^0-9]/g, ''); // Allow only numeric input
                handleChange('phoneNumber')({ target: { value: numericValue } });
              }}
            />
          </>
        )}
        {validationWarning && (
          <Typography variant="body2" color="error" sx={{ marginTop: 1 }}>
            {validationWarning}
          </Typography>
        )}
        {page === 1 && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            disabled={!isNextEnabled}
            sx={{ marginTop: 2 }}
          >
            Next
          </Button>
        )}
        {page === 2 && (
          <>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleBack}
              sx={{ marginTop: 2, marginRight: 2 }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleJoin}
              disabled={!isNextEnabled}
              sx={{ marginTop: 2 }}
            >
              Join
            </Button>
          </>
        )}
        <Button
          variant="outlined"
          color="secondary"
          onClick={onCancel}
          sx={{ marginTop: 2, marginLeft: 2 }}
        >
          Cancel
        </Button>
      </form>
    </Box>
  );
};

export default TeacherSignup;
