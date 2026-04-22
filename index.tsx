import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

class ErrorBoundary extends React.Component<{children: React.ReactNode}, {error: Error | null}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error: Error) { return { error }; }
  render() {
    if (this.state.error) {
      return (
        <div style={{padding:'2rem',fontFamily:'sans-serif',color:'red'}}>
          <h2>Error al cargar la app:</h2>
          <pre style={{whiteSpace:'pre-wrap'}}>{this.state.error.message}</pre>
          <pre style={{whiteSpace:'pre-wrap'}}>{this.state.error.stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("No se encontró el elemento root");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
