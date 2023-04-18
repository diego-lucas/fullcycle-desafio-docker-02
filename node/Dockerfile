FROM node:15-slim

WORKDIR /usr/src/app

RUN apt update && \
    apt install -y wget netcat && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

COPY . .

EXPOSE 3000

RUN chmod +x ./entrypoint.sh

CMD ["node","index.js"]