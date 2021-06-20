
    $ git clone https://github.com/shajalahamedcse/react-docker.git
    $ cd react-docker
    $ code .


## Without using Docker

    $ npm install
    $ npm start

## Using Docker

    $ docker build -t <username>/<image_name>:version .
    $ docker run -p <outer_port>:<inner_port> <username>/<image_name>:version
