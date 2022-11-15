import { useState } from "react";

const ErrorBoundary = () => {
  const [hasError, setHasError] = useState(false);
  return <div>ErrorBoundary</div>;
};

export default ErrorBoundary;
