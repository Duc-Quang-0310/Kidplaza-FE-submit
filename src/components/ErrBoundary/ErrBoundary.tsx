import { Component, ReactNode } from "react";

interface States {
  hasError: boolean;
}

interface Props {
  children: ReactNode;
}

class ErrorBoundary extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error(`Crash app at: ${error}`, `With details: ${errorInfo}`);
  }

  render() {
    if (this.state.hasError) {
      return this.props.children || <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
