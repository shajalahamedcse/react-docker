###########
# BUILDER #
###########

# pull official base image
FROM node:latest as builder

# set working directory
WORKDIR /usr/src/app



# # install and cache app dependencies
COPY package.json .
# RUN npm ci
RUN npm install 


# # create build
COPY . .
RUN npm run build


#########
# FINAL #
#########

# # base image
FROM nginx:1.19.4-alpine

# # update nginx conf
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
# CMD [ "sleep","300" ]
# # copy static files
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# expose port
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]