import type { InitOutput as WasmModuleInterface } from '@wasm'

type ImageEditorInput = { wasm: WasmModuleInterface }

function ImageEditor({ wasm: { load_image } }: ImageEditorInput) {
    load_image()

    return (
        <>
            <div>
                Image editor
            </div>
        </>
    )
}

export default ImageEditor
