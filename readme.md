# Front-end Descomplica 

#### https://app-descomplica.herokuapp.com/

## Prerequisites 📋 
Commands for using docker in this project

Install Docker and Docker Compose on your machine https://www.docker.com/

## Quick Start 🚀
To use this project it is necessary to perform the following steps:

#### 1º Clone the repository on your machine
```bash
git clone https://github.com/ViniDevs/front-descomplica.git
```

#### 2º Mount the image and run
```bash
docker-compose build
```

#### 3º Run the docker-compose
```bash
docker-compose up
```

#### 4º Access the application
```console
http://localhost:3000
```

## To run an application version

#### 1º Mount the image and run
```bash
docker build -t front-desc .
```

#### 2º Run the docker-compose
```bash
docker run -p 3000:81 front-desc
```

## --Without Docker 📦

Install node https://nodejs.org/en/

Install yarn https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable

With the node already installed, go to the project root folder and execute the following commands:

### 1º Install dependencies
```bash
yarn install
```

### 2º Run the application
```bash
yarn start
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
