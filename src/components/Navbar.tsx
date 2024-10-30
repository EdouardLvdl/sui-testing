import React from 'react';
import { Wallet } from 'lucide-react';
import { ConnectButton } from '@mysten/wallet-kit';

export function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-xl">
              <Wallet className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              SUI Staking
            </span>
          </div>
          <ConnectButton className="bg-secondary hover:bg-primary hover:text-white text-primary font-medium py-2.5 px-5 rounded-xl transition-all duration-300" />
        </div>
      </div>
    </nav>
  );
}