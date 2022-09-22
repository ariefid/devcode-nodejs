# DevCode NodeJS

## About

The source code is for GetHired DevCode NodeJS by [Arief P](https://github.com/ariefid).

Todo application with user activities.

I'm using Hyper Express ^6.x on Docker.

## Installation

-   Download or Clone this repository

    ```bash
    $ git clone https://github.com/ariefid/devcode-nodejs.git
    ```

-   Change directory to this repository directory.

    ```bash
    $ cd devcode-nodejs/apps
    ```

-   Run docker build:

    ```bash
    $ docker build -t ariefid/devcode-nodejs --network=host .
    ```

-   Run docker (change x.x.x.x and xxxx to match your database configuration first):

    ```bash
    $ docker run -d --platform linux/x86_64 -e MYSQL_HOST=x.x.x.x -e MYSQL_USER=xxxx -e MYSQL_PASSWORD=xxxx -e MYSQL_DBNAME=xxxx -e NODE_LOCAL_PORT=8090 -e NODE_DOCKER_PORT=3030 -p 8090:3030 ariefid/devcode-nodejs
    ```

-   Install for testing api (change api_url env x.x.x.x:yyyy / hostname_ip:port):

    ```bash
    $ docker pull monsterup/devcode-unit-test-1
    ```

    ```bash
    $ docker run -e API_URL=http://x.x.x.x:yyyy monsterup/devcode-unit-test-1
    ```

## License

The source code is open-sourced software licensed under the [MIT license](./LICENSE).
