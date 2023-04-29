# Usa una imagen de Node.js como base
FROM node:16.10.0

RUN npm install -g @vue/cli

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json en el contenedor
COPY package*.json ./

# RUN chown -R node:node .
# USER node

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto en el contenedor
COPY . .

# Compila el proyecto
RUN npm run build

# Abre el puerto 6000
EXPOSE 6000

# Inicia el servidor web para la aplicación
CMD npm run dev --host