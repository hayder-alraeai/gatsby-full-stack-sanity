import { MdLocalPizza } from 'react-icons/md';

export default {
  name: 'pizza',
  title: 'pizzas',
  type: 'document',
  icon: MdLocalPizza,
  fields: [
    {
      name: 'name',
      title: 'Pizza Name',
      type: 'string',
      description: 'Name of the pizza',
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the pizza in cents',
    },
    {
      name: 'toppings',
      title: 'Toppings',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topping' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      toppings0: 'toppings.0.name',
      toppings1: 'toppings.1.name',
      toppings2: 'toppings.2.name',
      toppings3: 'toppings.3.name',
    },
    prepare: ({ title, media, ...toppings }) => {
      const tops = Object.values(toppings).filter(Boolean);
      return {
        title,
        media,
        subtitle: tops.join(', '),
      };
    },
  },
};
