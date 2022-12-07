import React from 'react';

export interface ToastProps {
  children?: React.ReactNode;
  variant?: 'info' | 'error';
}
