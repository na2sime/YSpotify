# YSpotify

YSpotify is a project to connect a backend with Spotify.

## Prerequisites

You need to have Docker installed on your environment.

## Setup and Running

The project is set up and run using various npm scripts defined in `package.json`: 

```bash
npm run <script>
```

- `npm run start`: Starts the Docker containers in the background, building them if not already built.
- `npm run stop`: Stops the Docker containers.
- `npm run logs`: Shows the logs from the Docker containers.
- `npm run restart`: Stops the Docker containers if they are running, then starts them again, building them if not already built.
- `npm run rebuild`: Similar to `start`, starts the Docker containers and builds them if not already built. If the containers are already running, this will rebuild them.
- `npm run clean`: Stops the Docker containers and removes the containers, networks, volumes, and images.

## Technology Stack

- Node.js
- Docker
- Express
- Spotify API
- MongoDB
- Mongoose