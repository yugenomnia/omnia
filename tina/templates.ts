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
      name: "meta_description",
      label: "Meta Description (up to 160 characters)",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "image",
      name: "main_img",
      label: "Cover image",
    },
    {
      type: "object",
      name: "team_members",
      label: "Upper sections",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.name} (${item?.title}) `}
        },
      },
      fields: [
        {
          type: "image",
          name: "img",
          label: "Image",
        },
        {
          type: "string",
          name: "name",
          label: "Name",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "rich-text",
          name: "text",
          label: "Text",
        },
      ],
    },
    {
      type: "string",
      name: "produce_title",
      label: "Key suppliers Title",
    },
    {
      type: "string",
      name: "produce_second_title",
      label: "Key suppliers subtitle",
    },
    {
      type: "image",
      name: "produce_image",
      label: "Key suppliers image",
    },
    {
      type: "rich-text",
      name: "produce_text",
      label: "Key suppliers text",
    },
    {
      type: "object",
      name: "partners",
      label: "Partners",
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
          label: "Title",
        },
        {
          type: "rich-text",
          name: "text",
          label: "Text",
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
      name: "meta_description",
      label: "Meta Description (up to 160 characters)",
    },
    {
      type: "image",
      name: "main_img",
      label: "Cover Image",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "second_title",
      label: "Subtitle",
    },
    {
      type: "image",
      name: "second_photo",
      label: "Section Photo",
    },
    {
      type: "rich-text",
      name: "first_text",
      label: "Text",
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
      type: "string",
      name: "meta_description",
      label: "Meta Description (up to 160 characters)",
    },
    {
      type: "image",
      name: "main_img",
      label: "Cover Image",
    },
    {
      type: "rich-text",
      name: "text",
      label: "Text",
    },
    {
      type: "rich-text",
      name: "career_text",
      label: "Career text",
    },
    {
      type: "image",
      name: "second_photo",
      label: "second photo",
    },
    {
      type: "string",
      name: "dinner_days",
      label: "Dinner Days",
    },
    {
      type: "string",
      name: "dinner_time",
      label: "Dinner Time",
    },
    {
      type: "string",
      name: "lunch_days",
      label: "Lunch Days",
    },
    {
      type: "string",
      name: "lunch_time",
      label: "Lunch Time",
    },
    
    {
      type: "string",
      name: "closed_days",
      label: "Closed Days",
    },
    {
      type: "string",
      name: "phone",
      label: "Phone",
    },
    {
      type: "string",
      name: "email",
      label: "Email",
    },
    {
      type: "rich-text",
      name: "subscribe_text",
      label: "Subscribe text",
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
      name: "meta_description",
      label: "Meta Description (up to 160 characters)",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      ui: {
        component: () => null
      }
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
          type: "image",
          name: "img",
          label: "Image",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "second_title",
          label: "Subtitle",
        },
        {
          type: "rich-text",
          name: "text",
          label: "Text",
        },
        {
          type: "string",
          name: "menu_btn_text",
          label: "Menu button text",
        },
        {
          type: "image",
          name: "menu_pdf",
          label: "Menu PDF",
        },
        {
          type: "string",
          name: "book_now_btn_text",
          label: "Book button text",
        },
        {
          type: "string",
          name: "book_now_url",
          label: "Book link(full url)",
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
      name: "meta_description",
      label: "Meta Description (up to 160 characters)",
    },
    {
      type: "string",
      name: "big_title",
      label: "Big title",
      ui: {
        component: () => null
      }
    },
    {
      type: "image",
      name: "main_img",
      label: "Cover Image",
    },
    {
      type: "object",
      name: "food_section",
      label: "Food section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "image",
          name: "img",
          label: "Section image",
        },
        {
          type: "string",
          name: "second_title",
          label: "Subtitle",
        },
        {
          type: "rich-text",
          name: "text",
          label: "Text",
        },
        {
          type: "string",
          name: "menu_btn_text",
          label: "Button text",
        },
        {
          type: "image",
          name: "menu_pdf",
          label: "Menu PDF",
        },
        {
          type: "string",
          name: "second_menu_btn_text",
          label: "Second Button text",
        },
        {
          type: "image",
          name: "second_menu_pdf",
          label: "Second Menu PDF",
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
          label: "Title",
        },
        {
          type: "image",
          name: "img",
          label: "Section image",
        },
        {
          type: "string",
          name: "second_title",
          label: "Subtitle",
        },
        {
          type: "rich-text",
          name: "text",
          label: "Text",
        },
        {
          type: "rich-text",
          name: "second_text",
          label: "Second Text",
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
              label: "Title",
            },
            {
              type: "rich-text",
              name: "text",
              label: "Text",
            },
            {
              type: "image",
              name: "menu_pdf",
              label: "Menu PDF",
            },
            {
              type: "string",
              name: "menu_btn_text",
              label: "Button text",
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
      name: "meta_description",
      label: "Meta Description (up to 160 characters)",
    },
    {
      type: 'boolean',
      name: 'active_popup',
      label: 'Activate pop-up'
    },
    {
      type: "string",
      name: "event_popup_title",
      label: "Popup title",
    },
    {
      type: "rich-text",
      name: "event_popup_text",
      label: "Popup text",
    },
    {
      type: "string",
      name: "event_popup_first_btn_text",
      label: "First Button Text",
    },
    {
      type: "string",
      name: "event_popup_first_btn_link",
      label: "First Button Link (URL)",
    },
    {
      type: "string",
      name: "event_popup_second_btn_text",
      label: "Second Button Text",
    },
    {
      type: "string",
      name: "event_popup_second_btn_link",
      label: "Second Button Link (URL)",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "image",
      name: "hero_images",
      label: "Hero images",
      list: true,
    },
    {
      type: "image",
      name: "main_img",
      label: "Cover Image",
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
          label: "Image",
        },
        {
          type: "string",
          name: "section_title",
          label: "Title",
        },
        {
          type: "string",
          name: "section_second_title",
          label: "Subtitle",
        },
        {
          type: "string",
          name: "section_description",
          label: "Description",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "button_text",
          label: "Button Text",
        },
        {
          type: "string",
          name: "button_url",
          label: "Button Link",
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
export function reservationsFields() {
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
      type: 'boolean',
      name: 'active_page',
      label: 'Activate page (Please update content - Cover image, title and text before)'
    },
    {
      type: "string",
      name: "meta_description",
      label: "Meta Description (up to 160 characters)",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      ui: {
        component: () => null
      }
    },
    {
      type: "image",
      name: "main_img",
      label: "Cover Image",
    },
    {
      type: "string",
      name: "reservation_title",
      label: "Title for text near Widget",
    },
    {
      type: "rich-text",
      name: "reservation_text",
      label: "Text for text below title",
    },
    {
      type: "string",
      name: "dinner_time",
      label: "Dinner Time",
    },
    {
      type: "string",
      name: "dinner_days",
      label: "Dinner Days",
    },
    {
      type: "string",
      name: "lunch_time",
      label: "Lunch Time",
    },
    {
      type: "string",
      name: "lunch_days",
      label: "Lunch Days",
    },
    
    {
      type: "string",
      name: "closed_days",
      label: "Closed Days",
    },
    {
      type: "string",
      name: "phone",
      label: "Phone",
    },
    {
      type: "string",
      name: "email",
      label: "Email",
    },
  ] as TinaField[];
}