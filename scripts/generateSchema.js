const fs = require("fs");
const path = require("path");
const axios = require("axios");
const {
  getIntrospectionQuery,
  buildClientSchema,
  printSchema,
} = require("graphql");

const parentPath = path.join(__dirname, "../");
require("dotenv").config({ path: `${parentPath}/.env.local` });

const generateSchema = async () => {
  try {
    const res = await axios.post(
      "https://api.github.com/graphql",
      {
        query: getIntrospectionQuery(),
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        },
      }
    );

    const sdl = printSchema(buildClientSchema(res.data.data)); // #2
    fs.writeFileSync(`${parentPath}/schema.graphql`, sdl); // #3
  } catch (e) {
    console.error(e);
  }
};

generateSchema();
