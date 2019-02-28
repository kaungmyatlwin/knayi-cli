# knayi-cli

Simple command-line tool to replace Zawgyi-formatted and WinResearcher-formatted text files with proper

Automatically detects if your file is already in Unicode format.

CLI wrapper for Thuya Myo Nyunt's <a href="https://github.com/greenlikeorange/knayi-myscript">knayi-myscript</a> project.

## detect branch changes

This change strips every functions. Added `--detect` flag after input file to detect the encoding type.

```bash
npm install knayi-cli -g
knayi-cli '<any string here!>' --detect // zawgyi (or) unicode depending on string encoding
```

## License

Open sourced under the MIT license (same as original repo)
