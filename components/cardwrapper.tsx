import React from 'react';

interface CardWrapperProps {
    children: React.ReactNode;
}

const CardWrapper: React.FC<CardWrapperProps> = ({ children }) => {
    return <div className="flex flex-col gap-5 md:flex-row">{children}</div>;
};

export default CardWrapper;