React Visualforce Template
--------------------------

A template for developing React application in Visualforce.  
This template automates the following things:

- Build JavaScript & CSS using webpack
- Compress all bundled files and create StaticResource (`.resource`)
- Deploy StaticResource and all other metadata to your Salesforce org
- Watch file changes and run re-build & deploy

### Stack

- React
- [react-lightning-design-system](https://github.com/mashmatrix/react-lightning-design-system)
- gulp
- Babel
- webpack

### Installation

```zsh
$ npm install -g gulp
$ npm install
```

### Usage

First you need to rename `.env.sample` to `.env` and input your Salesforce org credentials.  
Then run following command.

```zsh
# Build JS/CSS & Create StaticResource & Deploy
$ gulp

# Deploy only
$ gulp deploy

# watch changes in src/ and pkg/ directory, and deploy when updated
$ gulp watch
```

### License

MIT
