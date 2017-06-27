FROM ubuntu:14.04

RUN \
  apt-get update && \
  apt-get install -y nginx

WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf
CMD nginx -g 'daemon off;'

# Expose ports
EXPOSE 8080