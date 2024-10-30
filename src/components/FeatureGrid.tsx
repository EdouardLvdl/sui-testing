import React from 'react';
import { Shield, LineChart, Coins, Clock, Users, Zap } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: 'Institutional-Grade Security',
    description: 'Protected by advanced cryptographic security and the Sui Move framework',
  },
  {
    icon: <LineChart className="w-6 h-6 text-primary" />,
    title: 'Competitive Returns',
    description: 'Earn up to 4% APR with transparent reward distribution',
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: '24/7 Staking',
    description: 'Stake and unstake your SUI tokens anytime, anywhere',
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: 'Community-Driven',
    description: 'Join a growing community of SUI stakers and validators',
  },
  {
    icon: <Coins className="w-6 h-6 text-primary" />,
    title: 'Flexible Rewards',
    description: 'Choose to auto-compound or claim rewards on your schedule',
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: 'Instant Processing',
    description: 'Experience fast transaction processing on the Sui network',
  },
];

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group"
        >
          <div className="bg-secondary w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            {feature.icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}