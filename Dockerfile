# Use lightweight Nginx web server
FROM nginx:alpine

# Copy all static web files into Nginx default serving directory
COPY . /usr/share/nginx/html/

# Expose HTTP port
EXPOSE 80
