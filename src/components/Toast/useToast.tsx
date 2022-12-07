import { useContext } from 'react';
import { GlobalContext } from '../../context';
import { ToastProps } from './types';

export const useToast = () => {
  const { toastList, setToastList } = useContext(GlobalContext);
  const toast = (toast: ToastProps) => {
    // console.log(toastList);
    setToastList?.(currentList => [...currentList, toast]);
  };
  return { toast };
};
