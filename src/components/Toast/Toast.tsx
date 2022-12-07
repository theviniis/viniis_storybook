import React from 'react';
import * as T from './types';
import * as S from './style';

export const Toast: React.FC<T.ToastProps> = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};
