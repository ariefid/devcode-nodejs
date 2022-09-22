# Initialize engine docker
FROM node:16-alpine as apps

# Fixing
RUN apk add --no-cache libc6-compat
RUN ln -s /lib/libc.musl-x86_64.so.1 /lib/ld-linux-x86-64.so.2

# Create app directory
WORKDIR /home/apps

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all files
COPY . .

# Chmod entrypoint
RUN chmod 755 entrypoint.sh

# Build apps
RUN npm run build

# Expose to port
EXPOSE 3030

# Start the server using the production build
CMD [ "sh", "-c", "--", "./entrypoint.sh" ]
