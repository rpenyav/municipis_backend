# Elige la imagen base con Node.js y Yarn
FROM node:16-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia los archivos de definición del proyecto
COPY package.json yarn.lock ./

# Instala las dependencias del proyecto usando Yarn
RUN yarn install

# Copia el resto de los archivos del proyecto
COPY . .

# Construye el proyecto
RUN yarn build

# El comando para iniciar la aplicación
CMD [ "yarn", "start:prod" ]
