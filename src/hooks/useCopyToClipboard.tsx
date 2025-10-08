import { useState } from "react";

type CopiedValue = string | null;
type CopyFn = (text: string) => Promise<boolean>;

interface UseCopyToClipboardReturn {
  copiedText: CopiedValue;
  copy: CopyFn;
  isCopied: boolean;
}

export function useCopyToClipboard(): UseCopyToClipboardReturn {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);
  const [isCopied, setIsCopied] = useState(false);

  const copy: CopyFn = async (text) => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported");
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setIsCopied(true);

      // Reset isCopied after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);

      return true;
    } catch (error) {
      console.warn("Copy failed", error);
      setCopiedText(null);
      setIsCopied(false);
      return false;
    }
  };

  return { copiedText, copy, isCopied };
}
