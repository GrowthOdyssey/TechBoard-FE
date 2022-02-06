import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

export type ToastType = {
  text: string;
  status: 'success' | 'error';
};

export type ToastContextType = {
  toast: ToastType;
  setToast: Dispatch<SetStateAction<ToastType>>;
};

export const ToastContext = createContext({} as ToastContextType);

export const ToastProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [toast, setToast] = useState<ToastType>({} as ToastType);

  return <ToastContext.Provider value={{ toast, setToast }}>{children}</ToastContext.Provider>;
};

export const useToast = (): ToastContextType => useContext(ToastContext);
