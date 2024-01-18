declare global {
  interface Window {
    trackGAEvent: (...args) => void;
  }
}

export {};
