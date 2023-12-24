import React, { useState } from 'react';
import { Button, Modal, Typography, Box } from '@mui/material';
import TeacherSignup from './TeacherSignup';
import TeacherLoginForm from './TeacherLoginForm';
import StudentLoginForm from './StudentLoginForm';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loginOption, setLoginOption] = useState('');

  const handleModalOpen = (option) => {
    setLoginOption(option);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const renderLoginForm = () => {
    switch (loginOption) {
      case 'student':
        return <StudentLoginForm onClose={handleModalClose} />;
      case 'teacher':
        return <TeacherLoginForm onClose={handleModalClose} />;
      case 'signup':
        return <TeacherSignup onClose={handleModalClose} />;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h2" gutterBottom>
        Welcome to the Quiz App
      </Typography>

      <Button
        variant="contained"
        color="primary"
        size="large"
        style={{ margin: '16px' }}
        onClick={() => handleModalOpen('student')}
      >
        Student
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="large"
        style={{ margin: '16px' }}
        onClick={() => handleModalOpen('teacher')}
      >
        Teacher
      </Button>
      <Button
        variant="outlined"
        color="primary"
        size="large"
        style={{ margin: '16px' }}
        onClick={() => handleModalOpen('signup')}
      >
        Sign Up
      </Button>

      <Modal open={modalOpen} onClose={handleModalClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          {renderLoginForm()}
        </Box>
      </Modal>
    </div>
  );
};

export default App;
