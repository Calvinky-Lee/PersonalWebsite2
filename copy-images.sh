#!/bin/bash

# Copy images from old website to new website
SOURCE_DIR="/Users/calvinlee/Code/Projects/Personal Website/personal-website/public/images"
DEST_DIR="/Users/calvinlee/Code/Projects/PersonalWebsite2/public"

# List of files to copy
FILES=("thri5.jpeg" "snowflake.png" "fullstack.png" "personalwebsite.png" "download.png")

for file in "${FILES[@]}"; do
    if [ -f "$SOURCE_DIR/$file" ]; then
        cp "$SOURCE_DIR/$file" "$DEST_DIR/$file"
        echo "Copied $file"
    else
        echo "File not found: $file"
    fi
done

echo "Done copying images!"

