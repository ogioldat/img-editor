import { useEffect, useState } from 'react';
import initWasm, * as exportedWasmAPI from '../../pkg';

export type WasmAPI = typeof exportedWasmAPI;

export function useWasm(): WasmAPI | null {
  const [wasmAPI, setWasmAPI] = useState<WasmAPI | null>(null);

  useEffect(() => {
    (async (): ReturnType<typeof initWasm> => {
      const mod = await initWasm();
      setWasmAPI(exportedWasmAPI);
      return mod;
    })();
  }, []);

  return wasmAPI;
}
