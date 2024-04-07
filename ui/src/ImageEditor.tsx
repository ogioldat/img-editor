import { useState } from 'react';
import { WasmAPI } from './use-wasm';

// TODO: Do it in wasm?
function getBase64FromArrayBuffer(buf: ArrayBuffer): string {
  const blob = new Blob([buf]);
  return URL.createObjectURL(blob);
}

function ImageEditor({ wasm: { grayscale } }: { wasm: WasmAPI }) {
  const [files, setFiles] = useState<FileList | null>();
  const [uploadedImg, setUploadedImg] = useState<ArrayBuffer | null>(null);
  const [editedImg, setEditedImg] = useState<ArrayBuffer | null>(null);

  const imgUploaded = files?.length === 1;
  const reader = new FileReader();
  reader.onload = () => {
    if (reader.result instanceof ArrayBuffer) {
      setUploadedImg(reader.result);
      setEditedImg(reader.result);
    }
  };

  if (imgUploaded) {
    reader.readAsArrayBuffer(files[0]);
  }

  const canViewUploadedImg = imgUploaded && editedImg && uploadedImg;

  return (
    <>
      <div>
        Image editor
        <div>
          <h2>Select image</h2>

          <input
            type="file"
            max={1}
            accept="image/png, image/jpeg, image/jpg"
            onChange={(e) => setFiles(e.target.files)}
          />

          {canViewUploadedImg && (
            <div>
              <div>
                <p>Uploaded</p>
                <img width={500} src={getBase64FromArrayBuffer(uploadedImg)} />
              </div>

              <button
                onClick={() => {
                  const edited = grayscale(new Uint8Array(uploadedImg));
                  setEditedImg(edited.buffer);
                }}
              >
                Grayscale
              </button>

              <div>
                <p>Edited</p>
                <img width={500} src={getBase64FromArrayBuffer(editedImg)} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ImageEditor;
