use std::io::Cursor;

use image::{codecs, io::Reader as ImageReader};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn grayscale(bytes: &[u8]) -> Vec<u8> {
    let img = ImageReader::new(Cursor::new(bytes))
        .with_guessed_format()
        .unwrap()
        .decode()
        .unwrap();

    let mut buf = vec![];
    let encoder = codecs::jpeg::JpegEncoder::new(&mut buf);

    img.grayscale()
        .write_with_encoder(encoder)
        .expect("Failed to encode img");

    println!("buf comp {} {}", img.as_bytes().len(), buf.len());

    buf
}
