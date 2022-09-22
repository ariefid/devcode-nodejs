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
    $ cd devcode-nodejs
    ```

-   Copy .env.example to .env:

    ```bash
    $ cp .env.example .env
    ```

-   Edit configuration in .env file (do not use root user! see: [https://stackoverflow.com/a/66910240](https://stackoverflow.com/a/66910240)):

    ```env
    # Do not change MYSQL_HOST unless you change in docker-compose.yml file!
    MYSQL_HOST=ariefid-db

    MYSQL_PORT=3306
    MYSQL_USER=docker
    MYSQL_PASSWORD=docker
    MYSQL_DBNAME=todo

    NODE_LOCAL_PORT=8090
    NODE_DOCKER_PORT=3030
    ```

-   Run docker compose:

    ```bash
    $ docker compose up -d
    ```

-   Access [http://localhost:8090](http://localhost:8090) in your local computer.

## License

The source code is open-sourced software licensed under the [MIT license](./LICENSE).
