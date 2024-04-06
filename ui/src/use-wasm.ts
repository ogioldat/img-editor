import type { InitOutput } from '@wasm';
import { useEffect, useState } from 'react';
import initWasm from '../../pkg';

export function useWasm(): InitOutput | null {
  const [wasmModule, setWasmModule] = useState<InitOutput | null>(null);

  useEffect(() => {
    (async (): Promise<InitOutput> => {
      const mod = await initWasm();
      setWasmModule(mod);
      return mod;
    })();
  }, []);

  return wasmModule;
}
