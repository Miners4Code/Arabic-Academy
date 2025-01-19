"use client";

import { createContext, useContext, useState } from 'react';

interface SignupData {
  email: string;
  password: string;
}

interface SignupContextType {
  signupData: SignupData | null;
  setSignupData: (data: SignupData | null) => void;
}

const SignupContext = createContext<SignupContextType | undefined>(undefined);

export const SignupProvider = ({ children }: { children: React.ReactNode }) => {
  const [signupData, setSignupData] = useState<SignupData | null>(null);
  
  return (
    <SignupContext.Provider value={{ signupData, setSignupData }}>
      {children}
    </SignupContext.Provider>
  );
};

export const useSignup = () => {
  const context = useContext(SignupContext);
  if (context === undefined) {
    throw new Error('useSignup must be used within a SignupProvider');
  }
  return context;
};