import type { InitOutput as WasmModuleInterface } from '@wasm';
import { SyntheticEvent, useState } from 'react';

type ImageEditorInput = { wasm: WasmModuleInterface };

function ImageEditor({ wasm: { load_image } }: ImageEditorInput) {
  const [files, setFiles] = useState<FileList | null>();

  return (
    <>
      <div>
        Image editor
        <div>
          <h2>Select image</h2>

          <input type="file" accept="image/png, image/jpeg, image/jpg" onChange={(e) => setFiles(e.target.files)} />
        </div>
      </div>
    </>
  );
}

export default ImageEditor;
