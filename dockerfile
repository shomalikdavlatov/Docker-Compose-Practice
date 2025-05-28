FROM node:22-alpine
COPY package*.json yarn.lock
RUN yarn install --freeze-lock && yarn clean cache
COPY . .
RUN yarn build
CMD ["yarn", "start:prod"]