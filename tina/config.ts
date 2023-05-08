import { defineConfig } from "tinacms";
import { aboutFields } from "./templates";
import { bookingsFields } from "./templates";
import { contactsFields } from "./templates";
import { eventsFields } from "./templates";
import { foodFields } from "./templates";
import { indexFields } from "./templates";
import { privacyFields } from "./templates";
import { termsFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "d5b93ba7-4c20-4bcb-bbdc-bc45671cc42c", // Get this from tina.io
  token: "6e4165f2c5fc4045445811e06a6c8c866f90f84e", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "/assets/images",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      {
        label: 'Pages',
        name: 'page',
        path: '_pages',
        format: 'md',
        templates: [
          {
            name: 'homepage',
            label: 'Homepage',
            fields: indexFields(),
          },
          {
            name: 'about',
            label: 'About page',
            fields: aboutFields(),
          },
          {
            name: 'bookings',
            label: 'Bookings Page',
            fields: bookingsFields(),
          },
          {
            name: 'contacts',
            label: 'Contact page',
            fields: contactsFields(),
          },
          {
            name: 'events',
            label: 'Events page',
            fields: eventsFields(),
          },
          {
            name: 'food',
            label: 'Food Page',
            fields: foodFields(),
          },
          {
            name: 'privacy',
            label: 'Privacy page',
            fields: privacyFields(),
          },
          {
            name: 'terms',
            label: 'Terms & Conditionsb page',
            fields: termsFields(),
          },
          
        ]
      },
    ],
  },
});
