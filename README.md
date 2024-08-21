1. Iniciar proyecto
```
npm init -y
``` 
2. Instalar TypeScript y demás dependencias
```
npm i -D typescript @types/node ts-node-dev rimraf
```
3. Inicializar el archivo de configuración de TypeScript ( Se puede configurar al gusto)
```
npx tsc --init --outDir dist/ --rootDir src
```
4. Crear scripts para dev, build y start ([Más sobre TS-Node-dev aquí](https://www.npmjs.com/package/ts-node-dev))
```
  "dev": "tsnd --respawn --clear src/app.ts",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"
```
5. Instalar Express
```
npm install express
npm i --save-dev @types/express
```
6. Variables de entorno
```
npm i dotenv env-var
```
dotenv : para poder tomar variables de entorno, al usar dotenv/config lee por defecto el archivo .env
env-var :validaciones y demas
7. Installar prisma
```
npm install prisma --save-dev
npx prisma init --datasource-provider postgresql
```
8. Installar mongoose
```
npm install mongoose 
```
