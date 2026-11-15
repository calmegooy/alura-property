/**
 * Validates and normalizes external HTTP(S) URLs so unsafe URI schemes
 * (such as javascript:, data:, or vbscript:) can never be rendered in links.
 */
export function toSafeExternalUrl(rawUrl?: string | null): string | null {
  const value = rawUrl?.trim();
  if (!value) return null;

  try {
    const parsed = new URL(value);
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
      return null;
    }
    return parsed.toString();
  } catch {
    return null;
  }
}
