npm init -y && npm i -D lerna

<br />

npx lerna init

npx gitignore node
<br />

npx lerna clean -y

npx lerna bootstrap --hoist

  <br />

    "scripts": {
        "start": "lerna run start  --scope={client,server}",
        "test": "lerna run test --scope=client",
        "new-version": "lerna version --conventional-commits --yes",
        "diff": "lerna diff"
      },
