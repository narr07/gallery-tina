// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || "master";
var config_default = defineConfig({
  branch,
  clientId: process.env.NUXT_TINA_CLIENT_ID || "",
  // Get this from tina.io
  token: process.env.NUXT_TINA_TOKEN || "",
  // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
