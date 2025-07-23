'use client';

import React from 'react';

const cardData = [
    {
        title: 'Total Policies',
        value: '4,230',
        barColor: 'bg-blue-300',
        barWidth: 'w-3/4',
        borderColor: 'border-blue-500',
        bgColor: 'bg-blue-100',
    },
    {
        title: 'Claims Processed',
        value: '1,295',
        barColor: 'bg-red-300',
        barWidth: 'w-2/3',
        borderColor: 'border-red-500',
        bgColor: 'bg-red-100',
    },
    {
        title: 'Premium Income',
        value: '$950K',
        barColor: 'bg-green-300',
        barWidth: 'w-3/5',
        borderColor: 'border-green-500',
        bgColor: 'bg-green-100',
    },
    {
        title: 'Active Users',
        value: '15,870',
        barColor: 'bg-yellow-300',
        barWidth: 'w-1/2',
        borderColor: 'border-yellow-500',
        bgColor: 'bg-yellow-100',
    },
];

const TopCards = () => {
    return (
        <div className="grid lg:grid-cols-8 gap-4 py-4 w-full bg-transparent">
            {cardData.map((card, index) => (
                <div
                    key={index}
                    className={`lg:col-span-2 col-span-1 shadow-lg ${card.bgColor} flex justify-between w-full border rounded-lg hover:shadow-md hover:bg-gray-100 transition duration-300 ease-in-out border-solid ${card.borderColor} border-r-4`}
                >
                    <div className="flex flex-col justify-center w-full m-4">
                        <p className="text-gray-800 text-sm font-semibold">{card.title}</p>
                        <div className="flex w-auto h-1 mt-2">
                            <div className={`${card.barColor} ${card.barWidth} h-1`} />
                            <div className="bg-gray-200 flex-1 h-1" />
                        </div>
                    </div>
                    <div className={`${card.barColor} flex justify-center items-center p-2`}>
                        <span className="text-sm font-bold text-gray-800">{card.value}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TopCards;
