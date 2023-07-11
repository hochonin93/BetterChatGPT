# FROM node:alpine

# RUN addgroup -S appgroup && \
#   adduser -S appuser -G appgroup && \
#   mkdir -p /home/appuser/app && \
#   chown appuser:appgroup /home/appuser/app
# USER appuser

# RUN yarn config set prefix ~/.yarn && \
#   yarn global add serve

# WORKDIR /home/appuser/app
# COPY --chown=appuser:appgroup package.json yarn.lock ./
# RUN yarn install --frozen-lockfile
# COPY --chown=appuser:appgroup . .
# RUN yarn build

# EXPOSE 3000
# CMD ["/home/appuser/.yarn/bin/serve", "-s", "dist", "-l", "3000"]


# ---- Base Node ----
FROM node:19-alpine AS base
WORKDIR /app
# COPY package*.json ./

# ---- Dependencies ----
# FROM base AS dependencies
# RUN npm ci
COPY . .
RUN npm install
RUN npm run nbuild
# RUN npm install --save nextjs-cors@latest
# ---- Build ----
# FROM dependencies AS build
# COPY . .

# Expose the port the app will run on
EXPOSE 3000
