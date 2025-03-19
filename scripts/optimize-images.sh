#!/bin/bash

# Optimize images in the images directory
echo "Optimizing images in the images directory..."
imagemin out/images/* --out-dir=out/images
echo "Images directory optimization complete!"

# Optimize other image assets in the root directory
echo "Optimizing other image assets..."
imagemin "out/*.png" --out-dir=out
imagemin "out/*.svg" --out-dir=out
echo "Other assets optimization complete!"

echo "All optimizations complete!"
