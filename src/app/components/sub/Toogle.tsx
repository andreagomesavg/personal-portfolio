'use client'

import { ReactNode } from 'react';

interface ToggleProps {
  children: ReactNode;
}

const Toggle = ({children}: ToggleProps) => {
  return (
   <main>
    <div>
        <div className=''>
        
            {children}
        </div>
    </div>
   </main>
  );
}
export default Toggle;