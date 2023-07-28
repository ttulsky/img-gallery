"use client";
import { Button } from "react-bootstrap";
interface ErrorPageProps {
  error: Error;
  reset: () => void;
}
export default function Error({ error, reset }: ErrorPageProps) {
  return (
    <div>
      <h1>Danger Will Robinson!</h1>
      <h2>Its A Trap!!!</h2>
      <Button onClick={reset}>Try Again</Button>
    </div>
  );
}
