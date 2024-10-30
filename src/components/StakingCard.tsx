import React, { useState } from 'react';
import { Wallet, ArrowRight, LineChart, Shield, Coins } from 'lucide-react';
import { useWalletKit } from '@mysten/wallet-kit';
import { TransactionBlock } from '@mysten/sui.js/transactions';

const VALIDATOR_ADDRESS = "0x9b8b11c9b2336d35f2db8d5318ff32de51b85857f0e53a5c31242cf3797f4be4";

export function StakingCard() {
  const [stakeAmount, setStakeAmount] = useState<string>('');
  const [isStaking, setIsStaking] = useState(false);
  const { currentAccount, signAndExecuteTransactionBlock } = useWalletKit();

  const handleStake = async () => {
    if (!currentAccount || !stakeAmount) return;

    setIsStaking(true);
    try {
      const txb = new TransactionBlock();
      
      const amountInMist = BigInt(parseFloat(stakeAmount) * 1_000_000_000);
      const [coin] = txb.splitCoins(txb.gas, [txb.pure(amountInMist)]);
      
      txb.moveCall({
        target: '0x3::sui_system::request_add_stake',
        arguments: [
          txb.object('0x5'),
          coin,
          txb.pure(VALIDATOR_ADDRESS),
        ],
      });

      const result = await signAndExecuteTransactionBlock({
        transactionBlock: txb,
      });

      console.log('Staking successful:', result);
      setStakeAmount('');
      alert('Staking successful! Transaction: ' + result.digest);
      
    } catch (error) {
      console.error('Staking failed:', error);
      alert('Staking failed. Please try again.');
    } finally {
      setIsStaking(false);
    }
  };

  const estimatedRewards = parseFloat(stakeAmount || '0') * 0.04;

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md border border-gray-100">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Stake SUI</h2>
        <div className="bg-secondary p-2 rounded-xl">
          <Wallet className="w-6 h-6 text-primary" />
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-secondary rounded-2xl p-6">
          <label className="block text-sm font-medium text-gray-600 mb-3">
            Amount to Stake
          </label>
          <div className="relative">
            <input
              type="number"
              value={stakeAmount}
              onChange={(e) => setStakeAmount(e.target.value)}
              placeholder="0.0"
              min="1"
              step="0.000000001"
              className="w-full px-4 py-4 rounded-xl bg-white border-2 border-primary/10 focus:border-primary focus:outline-none transition-all text-lg"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
              SUI
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between bg-secondary rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <LineChart className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-gray-600">
              Estimated APR
            </span>
          </div>
          <span className="text-lg font-bold text-primary">4.0%</span>
        </div>

        <div className="bg-secondary rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Coins className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-gray-600">
                Estimated Rewards
              </span>
            </div>
            <span className="text-lg font-bold text-gray-800">
              {estimatedRewards.toFixed(4)} SUI/year
            </span>
          </div>
        </div>

        <button
          onClick={handleStake}
          disabled={!currentAccount || !stakeAmount || isStaking || parseFloat(stakeAmount) <= 0}
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
        >
          {!currentAccount ? (
            'Connect Wallet to Stake'
          ) : isStaking ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin" />
              Staking...
            </div>
          ) : (
            <>
              Stake Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </div>

      <div className="mt-6 flex items-start gap-3 bg-secondary rounded-xl p-4">
        <Shield className="w-5 h-5 text-primary mt-0.5" />
        <p className="text-sm text-gray-600">
          Your funds are secured by the Sui Move framework and validator network.
          Stake with confidence.
        </p>
      </div>
    </div>
  );
}