import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const StudentLoginForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    examCode: '',
  });

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleLogin = () => {
    // Add your logic for student login here
    console.log('Student Login:', formData);
    onClose();
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Student Login
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
        label="Exam Code"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.examCode}
        onChange={handleChange('examCode')}
      />
      <Button variant="contained" color="primary" onClick={handleLogin} sx={{ marginTop: 2 }}>
        Login
      </Button>
    </Box>
  );
};

export default StudentLoginForm;
