interface ButtonProps {
  children: string;
  bgColor: string;
  textColor: string;
  paddingX?: string;
  paddingY?: string;
  bgHover?: string;
  textHover?: string;
  custom?: string;
  onClick?: () => void;
}

export default function CtaButton({
  children,
  bgColor,
  textColor,
  paddingX,
  paddingY,
  bgHover,
  textHover,
  custom,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`${custom} ${bgColor} ${textColor} ${paddingX} ${paddingY} font-bold hover:transition hover:duration-200 hover:ease-in ${bgHover} ${textHover} min-w-44 mr-5 lg:mr-10 relative `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
