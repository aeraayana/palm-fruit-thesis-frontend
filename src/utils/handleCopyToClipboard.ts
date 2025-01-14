const handleCopyToClipboardFallback = async (text: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;

    // Avoid showing the textarea element
    textArea.style.position = 'absolute';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);

    // Select the text
    textArea.select();

    try {
      // Copy the text
      const successful = document.execCommand('copy');
      if (!successful) {
        console.error('Copy command failed');
      }
    } catch (err) {
      console.error('Fallback: Unable to copy', err);
    }

    // Clean up by removing the textarea
    document.body.removeChild(textArea);
}

export const handleCopyToClipboard = async (text: string) => {
    if (!navigator.clipboard) {
        console.error('Clipboard API not available');
        handleCopyToClipboardFallback(text);
        return;
    }
    try {
        await navigator.clipboard.writeText(text);

    } catch (err) {
        console.error('Failed to copy!', err);
    }
}