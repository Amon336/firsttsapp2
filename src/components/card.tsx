import React, { ReactNode , useState } from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string;
  height?: string;
  children?: ReactNode;
  variant?: CardVariant;
  onClick?: () => void
}

const Card: React.FC<CardProps> = ({ width, height, children, variant, onClick}) => {
    const [bgcolor, setBgcolor] = useState<string>('purple')
    const backgroundColor =
        variant === CardVariant.outlined
        ? "red"
        : variant === CardVariant.primary
        ? "blue"
        : bgcolor;

    return (
        <>
            <div style={{ width, height, backgroundColor }} className="card" onClick={onClick}>{children}</div>
        </>
    );
};

export default Card;