import { createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk('user/login', async (credentials: { email: string; password: string }) => {
  // Simulate API request
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (credentials.email === 'test@example.com' && credentials.password === 'password') {
        resolve({ email: credentials.email });
      } else {
        reject('Invalid credentials');
      }
    }, 1000);
  });
});
