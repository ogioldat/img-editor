use image::io::Reader as ImageReader;

fn main() {
    let img = ImageReader::open("./static/sample_img.jpeg")
        .unwrap()
        .decode()
        .unwrap();

    println!("img {:?}", img);
}
