**summary**

Run the following order to build project (1), run json-server API (2, backend), run the project (3, frontend) at separated terminals:

```bash
npm run build-petShop                    // build  project
npm run server-petshop                   // backend API
npm run dev-webpack-serve                // frontend website
```
<br><br><br><br>
---

To run the json-server: 

```bash
npm run server-petshop
```

It will simulate a API with the content from `server.json` file. Which each key will be an API route. Ex.:

```
{
    "users": [
        {
            "id": "1",
            "name": "Jason",
            "email": "json@email.com",
            "password": "123456"
        }
    ]
}
```

Above, `users` is a route. Note that all values are strings. This is needed to json-server compreehend the endpoint.

---

<br><br><br><br>

To build (1) and run (2) the project:

```bash
npm run build-petShop
npm run dev-webpack-serve
```

Use the settings below at the `webpack.config.js` (or `webpack.config.cjs` for commonJS):

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Para arquivos CSS
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Para imagens
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]', // Mantém a estrutura original e o nome do arquivo
            outputPath: 'images/', // Pasta de saída para imagens
          },
        },
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
  },
};
```