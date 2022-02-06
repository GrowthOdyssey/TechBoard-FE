import { VFC, memo, useEffect } from 'react';
import styled from 'styled-components';
import { ToastType, useToast } from '../providers/ToastProvider';

export const Toast: VFC = memo(() => {
  const { toast, setToast } = useToast();

  useEffect(() => {
    setTimeout(() => setToast({} as ToastType), 3000);
  }, []);

  return <_Toast className={toast.status}>{toast.text}</_Toast>;
});

const _Toast = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 10;
  min-width: 250px;
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 5px;
  opacity: 0;
  transform: translateX(100%);
  animation: fadeIn 0.3s 0s ease-out forwards, fadeOut 0.4s 2.5s ease-out forwards;
  &.success {
    color: #2b6cb0;
    background: #bee3f8;
    border: 1px solid #4299e1;
  }
  &.error {
    color: #e53e3e;
    background: #fed7d7;
    border: 1px solid #fc8181;
  }
  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes fadeOut {
    20%,
    40% {
      transform: translateX(-30px);
    }
    100% {
      opacity: 0;
      transform: translateX(100%);
    }
  }
`;
