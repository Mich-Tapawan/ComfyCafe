interface BurgerProps {
  onClick: () => void;
}

export default function Burger({ onClick }: BurgerProps) {
  return (
    <div className="burger-icon cursor-pointer lg:hidden" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.5rem"
        height="2.5rem"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke={"white"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
          d="M3 6h18M3 12h18M3 18h18"
        />
      </svg>
    </div>
  );
}
