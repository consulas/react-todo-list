# Constants
# GLYPH_ORDER = "1234567890ABCDEF "
GLYPHS = "1234567890abcdef "
CASE = any(c.isupper() for c in GLYPHS)

def file_to_hex(patch_file, hex_file):
    """Convert a file to a hexadecimal representation and save it in uppercase."""
    with open(patch_file, 'rb') as f:
        hex_data = f.read().hex()

    # Write GLYPH_ORDER followed by the hex data to the file
    with open(hex_file, 'w') as f:
        f.write(GLYPHS + "\n")
        f.write(hex_data.upper() if CASE else hex_data)