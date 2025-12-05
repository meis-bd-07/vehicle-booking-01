export function sleep(ms: number = 1500) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}
