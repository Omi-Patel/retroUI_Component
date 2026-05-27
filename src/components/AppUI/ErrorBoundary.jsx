import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    if (typeof console !== "undefined") {
      // eslint-disable-next-line no-console
      console.error("[ErrorBoundary]", error, info?.componentStack);
    }
  }

  handleReset = () => {
    this.setState({ error: null });
  };

  handleReload = () => {
    if (typeof window !== "undefined") window.location.reload();
  };

  render() {
    if (!this.state.error) return this.props.children;

    const message = this.state.error?.message || "Something went wrong.";

    return (
      <section className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="ornament-hr mb-6 max-w-xs mx-auto">
          <span className="label">ERROR · UNEXPECTED</span>
        </div>
        <h1
          className="display text-[48px] sm:text-[72px] leading-[1.0]"
          style={{ color: "var(--fg)" }}
        >
          Something{" "}
          <span className="display-italic" style={{ color: "var(--muted)" }}>
            broke.
          </span>
        </h1>
        <p
          className="mt-4 text-[15px] max-w-xl mx-auto"
          style={{ color: "var(--muted)" }}
        >
          {message}
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={this.handleReset}
            className="inline-flex items-center h-10 px-4 rounded-md text-[13.5px] font-medium"
            style={{
              background: "var(--fg)",
              color: "var(--bg)",
              border: "1px solid var(--border-strong)",
            }}
          >
            Try again
          </button>
          <button
            onClick={this.handleReload}
            className="inline-flex items-center h-10 px-4 rounded-md text-[13.5px] font-medium"
            style={{
              background: "var(--bg)",
              color: "var(--fg)",
              border: "1px solid var(--border)",
            }}
          >
            Reload page
          </button>
        </div>
      </section>
    );
  }
}
