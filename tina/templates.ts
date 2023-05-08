import type { TinaField } from "tinacms";
export function aboutFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "permalink",
      label: "Permalink",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "image",
      name: "main_img",
      label: "main_img",
    },
    {
      type: "object",
      name: "team_members",
      label: "team members",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.name} (${item?.title}) `}
        },
      },
      fields: [
        {
          type: "string",
          name: "name",
          label: "name",
        },
        {
          type: "string",
          name: "title",
          label: "title",
        },
        {
          type: "string",
          name: "text",
          label: "text",
        },
        {
          type: "image",
          name: "img",
          label: "img",
        },
      ],
    },
    {
      type: "string",
      name: "produce_title",
      label: "produce title",
    },
    {
      type: "string",
      name: "produce_second_title",
      label: "produce second title",
    },
    {
      type: "image",
      name: "produce_im",
      label: "produce image",
    },
    {
      type: "string",
      name: "produce_text",
      label: "produce text",
    },
    {
      type: "object",
      name: "partners",
      label: "partners",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.title} `}
        },
      },
      fields: [
        {
          type: "string",
          name: "title",
          label: "title",
        },
        {
          type: "string",
          name: "text",
          label: "text",
        },
      ],
    },
  ] as TinaField[];
}
export function bookingsFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "permalink",
      label: "Permalink",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "second_title",
      label: "second title",
    },
    {
      type: "image",
      name: "main_img",
      label: "main_img",
    },
    {
      type: "string",
      name: "first_text",
      label: "first_text",
    },
    {
      type: "string",
      name: "second_text",
      label: "second_text",
    },
    {
      type: "image",
      name: "second_photo",
      label: "second photo",
    },
  ] as TinaField[];
}
export function contactsFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "permalink",
      label: "Permalink",
      ui: {
        component: () => null
      }
    },
    {
      type: "image",
      name: "main_img",
      label: "main_img",
    },
    {
      type: "string",
      name: "text",
      label: "text",
    },
    {
      type: "string",
      name: "career_text",
      label: "career text",
    },
    {
      type: "image",
      name: "second_photo",
      label: "second photo",
    },
    {
      type: "string",
      name: "dinner_time",
      label: "dinner_time",
    },
    {
      type: "string",
      name: "dinner_days",
      label: "dinner_days",
    },
    {
      type: "string",
      name: "lunch_time",
      label: "lunch_time",
    },
    {
      type: "string",
      name: "lunch_days",
      label: "lunch_days",
    },
    {
      type: "string",
      name: "closed_days",
      label: "closed days",
    },
    {
      type: "string",
      name: "phone",
      label: "phone",
    },
    {
      type: "string",
      name: "email",
      label: "email",
    },
    {
      type: "string",
      name: "subscribe_text",
      label: "subscribe text",
    },
  ] as TinaField[];
}
export function eventsFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "permalink",
      label: "Permalink",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "image",
      name: "main_img",
      label: "main img",
    },
    {
      type: "object",
      name: "events",
      label: "events",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.title} `}
        },
      },
      fields: [
        {
          type: "string",
          name: "title",
          label: "title",
        },
        {
          type: "string",
          name: "second_title",
          label: "second title",
        },
        {
          type: "image",
          name: "img",
          label: "img",
        },
        {
          type: "string",
          name: "text",
          label: "text",
        },
      ],
    },
  ] as TinaField[];
}
export function foodFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "permalink",
      label: "Permalink",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "big_title",
      label: "Big title",
    },
    {
      type: "image",
      name: "main_img",
      label: "main img",
    },
    {
      type: "object",
      name: "food_section",
      label: "Food section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "title",
        },
        {
          type: "string",
          name: "second_title",
          label: "second title",
        },
        {
          type: "string",
          name: "text",
          label: "text",
        },
        {
          type: "image",
          name: "img",
          label: "img",
        },
        {
          type: "string",
          name: "menu_btn_text",
          label: "menu btn text",
        },
        {
          type: "image",
          name: "menu_pdf",
          label: "menu pdf",
        },
        {
          type: "string",
          name: "second_menu_btn_text",
          label: "second menu btn text",
        },
        {
          type: "image",
          name: "second_menu_pdf",
          label: "second menu pdf",
        },
      ],
    },
    {
      type: "object",
      name: "drink_section",
      label: "Drink section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "title",
        },
        {
          type: "string",
          name: "second_title",
          label: "second title",
        },
        {
          type: "string",
          name: "text",
          label: "text",
        },
        {
          type: "string",
          name: "second_text",
          label: "second text",
        },
        {
          type: "image",
          name: "img",
          label: "img",
        },
        {
          type: "object",
          name: "categories",
          label: "categories",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: `${item?.title} `}
            },
          },
          fields: [
            {
              type: "string",
              name: "title",
              label: "title",
            },
            {
              type: "string",
              name: "text",
              label: "text",
            },
            {
              type: "image",
              name: "menu_pdf",
              label: "menu pdf",
            },
            {
              type: "string",
              name: "menu_btn_text",
              label: "menu btn text",
            },
          ],
        },
      ],
    },
  ] as TinaField[];
}
export function indexFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "permalink",
      label: "Permalink",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "image",
      name: "main_img",
      label: "main img",
    },
    {
      type: "object",
      name: "sections",
      label: "Sections",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.section_title} `}
        },
      },
      fields: [
        {
          type: "image",
          name: "section_image",
          label: "section image",
        },
        {
          type: "string",
          name: "section_title",
          label: "section title",
        },
        {
          type: "string",
          name: "section_second_title",
          label: "section second title",
        },
        {
          type: "string",
          name: "section_description",
          label: "Section Description",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "button_text",
          label: "button text",
        },
        {
          type: "string",
          name: "button_url",
          label: "button url",
        },
      ],
    },
  ] as TinaField[];
}
export function privacyFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "permalink",
      label: "Permalink",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "big_title",
      label: "Title",
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
    },
    {
      type: "image",
      name: "main_img",
      label: "Main image",
    },
    {
      type: 'rich-text',
      label: 'Body of post',
      name: 'body',
      isBody: true,
    },
  ] as TinaField[];
}
export function termsFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "permalink",
      label: "Permalink",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "big_title",
      label: "big title",
    },
    {
      type: "string",
      name: "subtitle",
      label: "subtitle",
    },
    {
      type: "image",
      name: "main_img",
      label: "main img",
    },
    {
      type: 'rich-text',
      label: 'Body of post',
      name: 'body',
      isBody: true,
    },
  ] as TinaField[];
}
