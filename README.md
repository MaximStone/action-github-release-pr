<a href="https://github.com/MaximStone/action-github-release-pr/actions"><img alt="action-github-pr-release status" src="https://github.com/MaximStone/action-github-release-pr/actions/workflows/test.yml/badge.svg"></a>

# GitHub Action to create a "release pull request"

This action creates a "release pull request" that contains features list or pull requests.

## Features

This action's features is based on [yutailang0119/action-github-pr-release](https://github.com/yutailang0119/action-github-pr-release).

- [x] Select branches
    - target branch
    - from branch
- [ ] Template for title and body
    - [x] Title
    - [ ] Body
- [ ] Labels
    - [x] Support single label
    - [ ] Support Multiple labels
- [ ] Replace mention
- [ ] Assign authors
- [x] As draft
- [ ] Support command options
    - [ ] `squash`: Squash and merge
    - [ ] `no-fetch`: Do not fetch from remote repo before determining target PRs

## Usage

An example workflow(.github/workflows/github-pr-release.yml) to executing action follows:

```yml
name: github-pr-release

on:
  push:
    branches:
    - develop

jobs:
  github-pr-release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: MaximStone/action-github-release-pr@v3.1
        with:
          token: ${{ github.token }}
          target-branch: main
          from-branch: develop
          labels: Release
          title: Release v1.0.0
```

## Author

[MaximStone](https://github.com/MaximStone)

## References

- Generated from [actions/typescript-action](https://github.com/actions/typescript-action) as template.

## License

action-github-release-pr is available under the MIT license. See [the LICENSE file](./LICENSE) for more info.
