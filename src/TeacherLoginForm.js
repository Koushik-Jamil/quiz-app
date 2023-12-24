// TeacherLoginForm.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Link } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';

const TeacherLoginForm = ({ onClose, onSignUpClick }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleLogin = async () => {
    try {
      const { email, password } = formData;
      await signInWithEmailAndPassword(email, password);
      // Additional logic after successful login
      onClose();
    } catch (error) {
      console.error('Error logging in:', error.message);
      // Handle login error (e.g., display error message to user)
    }
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Teacher Login
      </Typography>
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.email}
        onChange={handleChange('email')}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.password}
        onChange={handleChange('password')}
      />
      <Button variant="contained" color="primary" onClick={handleLogin} sx={{ marginTop: 2 }}>
        Login
      </Button>
      <Typography variant="body2" sx={{ marginTop: 1 }}>
        Don't have an account?{' '}
        <Link href="#" onClick={onSignUpClick}>
          Click here
        </Link>
      </Typography>
    </Box>
  );
};

export default TeacherLoginForm;
