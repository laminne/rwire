export interface MrubyLED {
  id: string;
  type: "LED";
  z: string;
  name: string;
  /* onBoardLED固定の可能性がある */
  LEDtype: string;
  /* 空文字列が入っていた */
  targetPort: string;
  /* 0が入っている */
  targetPort_mode: string,
  /* 1が入っている */
  onBoardLED: string
  x: number,
  y: number,
  wires: string[]
}
