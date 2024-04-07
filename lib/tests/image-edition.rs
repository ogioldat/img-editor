use std::fs;

#[test]
fn create_grayscale_version_of_img() {
    let image_file = fs::read("./tests/assets/tomek_memoji.png")
        .expect("Should have been able to read the file");

    let grayscaled_img = img_editor::grayscale(&image_file);

    fs::write("./tests/assets/tomek_memoji.out.png", grayscaled_img)
        .expect("Failed to save output image");
}
