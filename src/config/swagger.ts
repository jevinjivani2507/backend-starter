import swaggerJsdoc from "swagger-jsdoc";
import { version } from "../../package.json";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Backend API Documentation",
      version,
      description: "API documentation for the backend services",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 8000}`,
        description: "Development server",
      },
    ],
    components: {
      securitySchemes: {
        cookieAuth: {
          type: "apiKey",
          in: "cookie",
          name: "token",
        },
      },
    },
  },
  // Path to the API docs
  apis: ["./src/routes/*.ts", "./src/types/*.ts"],
};

const specs = swaggerJsdoc(options);

export default specs;
