import React from 'react';
import { WalletKitProvider } from '@mysten/wallet-kit';
import { Navbar } from './components/Navbar';
import { StakingCard } from './components/StakingCard';
import { FeatureGrid } from './components/FeatureGrid';
import { Stats } from './components/Stats';

function App() {
  return (
    <WalletKitProvider>
      <div className="min-h-screen bg-gradient-to-br from-secondary to-white">
        <Navbar />
        
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-5xl font-bold text-primary mb-4">
              Stake Your SUI
            </h1>
            <p className="text-lg text-gray-600">
              Join thousands of SUI holders earning passive rewards through secure staking
            </p>
          </div>

          <Stats />

          <div className="flex justify-center mt-12">
            <StakingCard />
          </div>

          <FeatureGrid />
        </main>

        <footer className="mt-20 py-8 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
            <p>© 2024 SUI Staking. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </WalletKitProvider>
  );
}

export default App;