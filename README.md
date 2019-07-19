# versiony-cli

CLI for the versiony npm package

## Install

```
    npm install -g versiony-cli
```

## Usage

There are two arguments added, and not contained in the docs referenced at the bottom.

1. Create or change pre-release label:
   ```
   versiony --newPreRelease --preReleaseName beta.0
   ```
2. Bump number for existing pre-release:
   ```
   versiony --preRelease
   ```

See [versiony docs](https://github.com/radubrehar/versiony/blob/master/README.md#cli)
