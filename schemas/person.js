import { MdPerson } from 'react-icons/md';

export default {
  name: 'person',
  title: 'Slicemaster',
  type: 'document',
  icon: MdPerson,
  fields: [
    {
      name: 'person',
      title: 'Slicemaster',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'person',
        maxLength: 100,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Tell us a bit about this person',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
