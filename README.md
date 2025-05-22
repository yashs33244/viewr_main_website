# Next.js + Tailwind CSS + Shadcn/UI Template

This is a starter template using Next.js, Tailwind CSS, and Shadcn/UI.

## Features

- Next.js 15 App Router
- Tailwind CSS for styling
- Shadcn UI components
- Dark mode ready
- TypeScript support
- ESLint configured
- Ready to use components

## Getting Started

### Development

First, install dependencies:

```bash
npm install
# or
yarn install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Docker

The application has been dockerized for easy deployment. The Docker setup uses Bun for faster and more reliable builds.

#### Building the Docker image

```bash
docker build -t viewr-dark .
```

#### Running the Docker container

```bash
docker run -p 3000:3000 viewr-dark
```

#### Testing the Docker build

You can test if the Docker build works correctly without running the application:

```bash
# Using docker-compose to test the build
docker-compose --profile test run build-test

# Or directly with Docker
docker build -t viewr-dark:test .
```

#### Using Docker Compose

For a more complete setup, you can use Docker Compose:

```bash
# Start the application
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the application
docker-compose down
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## CI/CD Pipeline

This project includes a GitHub Actions workflow for CI/CD:

1. Builds the Docker image from the Dockerfile
2. Pushes the image to DockerHub with the `latest` tag (when merged to main)
3. The workflow is configured to only run on the main branch

### Required Secrets

To use the CI/CD pipeline, add these secrets to your GitHub repository:

- `DOCKERHUB_USERNAME`: Your DockerHub username
- `DOCKERHUB_TOKEN`: Your DockerHub access token

## License

MIT
