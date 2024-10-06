#checkov:skip=CKV_DOCKER_2
#checkov:skip=CKV_DOCKER_3
FROM nginx:1.27.1

# Copy the nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN mkdir -p /var/www/out
RUN chown -R nginx:nginx /var/www/out

