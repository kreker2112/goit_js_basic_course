'use strict';

import { faker } from '@faker-js/faker';

const allTags = [
  'health',
  'science',
  'gaming',
  'sports',
  'food',
  'comedy',
  'movies',
  'popular',
  'politics',
  'family',
];

const generateTags = () => {
  const times = faker.number.int({ min: 2, max: 5 });
  const tags = [];

  for (let i = 0; i < times; i += 1) {
    const tag = faker.helpers.arrayElement(allTags);

    if (!tags.includes(tag)) {
      tags.push(tag);
    }
  }

  return tags;
};

const generatePosts = amount => {
  const posts = [];

  for (let i = 0; i < amount; i += 1) {
    posts.push({
      id: faker.string.uuid(),
      createdAt: faker.date.recent(),
      text: faker.lorem.paragraphs(2),
      author: {
        name: faker.internet.userName(),
        avatar: faker.image.avatar(),
      },
      tags: generateTags(),
    });
  }

  return posts;
};

export const postsArray = generatePosts(9);
