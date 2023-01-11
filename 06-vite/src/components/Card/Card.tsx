interface CardProps {
  count: number;
  onIncrement?: () => void;
  children?: React.ReactNode;
}

export function Card({ count, onIncrement, children }: CardProps): JSX.Element {
  return (
    <div className="card">
      <button onClick={onIncrement}>카운트 {count}</button>
      {children}
    </div>
  );
}
