import { useContext, useEffect } from "react";
import {
  UNSAFE_NavigationContext as NavigationContext,
  To
} from "react-router-dom";
import type { History } from "history";

export function usePrompt(message: string, when = true) {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error("usePrompt must be used within a <Router>");
  }

  const navigator = context.navigator as History; // <--- Cast corretto

  useEffect(() => {
    if (!when) return;

    const unblock = navigator.block((tx: { retry: () => void; location: To }) => {
      if (window.confirm(message)) {
        unblock();
        tx.retry();
      }
    });

    return unblock;
  }, [navigator, message, when]);
}
