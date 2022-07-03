FROM node:alpine

WORKDIR /usr/app/

# Install dependencies required to git clone.
RUN apk update && \
    apk add --update git

RUN npm install -g npm@8.13.2

RUN git clone https://github.com/joaoemersonufc/gerenciador-de-eventos.git
WORKDIR /usr/app/gerenciador-de-eventos

RUN ls -la
RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]

