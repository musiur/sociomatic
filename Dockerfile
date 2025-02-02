FROM node:20.9

# Declare build arguments
ARG CLOUDINARY_API_SECRET
ARG NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
ARG NEXT_PUBLIC_CLOUDINARY_API_SECRET
ARG BASEURL

# Set environment variables
ENV CLOUDINARY_API_SECRET=$CLOUDINARY_API_SECRET
ENV NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=$NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
ENV NEXT_PUBLIC_CLOUDINARY_API_SECRET=$NEXT_PUBLIC_CLOUDINARY_API_SECRET
ENV BASEURL=$BASEURL

WORKDIR /app

COPY package.json .
RUN npm config set registry https://registry.npmjs.org/ && \
    npm install --legacy-peer-deps --production --fetch-retries=5 --fetch-retry-mintimeout=20000

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]