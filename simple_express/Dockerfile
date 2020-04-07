FROM node:10
WORKDIR /app

# Add package file
COPY package*.json ./

# Install deps
RUN npm i

# Copy source
COPY . ./
COPY src ./src
COPY tsconfig.json ./tsconfig.json
RUN npm run compile

# Expose port 3000
EXPOSE 3000

CMD ["node", "dist/app.js"]