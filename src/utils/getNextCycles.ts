export function getNetCycles(currentCyles: number) {
  return currentCyles === 0 || currentCyles === 8 ? 1 : currentCyles + 1;
}
