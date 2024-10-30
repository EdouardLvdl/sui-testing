import React from 'react';

export function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      {[
        { label: 'Total Value Locked', value: '$124M+' },
        { label: 'Active Stakers', value: '15,000+' },
        { label: 'Average APR', value: '4.0%' },
      ].map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all text-center group"
        >
          <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
            {stat.value}
          </div>
          <div className="text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}