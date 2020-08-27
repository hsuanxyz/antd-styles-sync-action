## Use

```yaml
name: Synchronize Ant Design Styles
on:
  push:
    branches: [ master ]
  workflow_dispatch:
    inputs:
      version:
        description: 'Which version want to synchronize (Default latest)'   
jobs:
  preview:
    runs-on: ubuntu-latest
    steps:
      - uses: hsuanxyz/antd-styles-sync-action@v1
        with:
          account_token: ${{ secrets.BOT_TOKEN }}
```

## Build

```
$ npm run build
```

## Release

```
git commit -m ".."
git tag -a -m ".." v1
git push --follow-tags
```
