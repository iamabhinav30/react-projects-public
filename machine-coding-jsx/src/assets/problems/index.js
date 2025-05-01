import metadata from './metadata.json';

const componentModules = import.meta.glob('../../Pages/Easy/*.jsx', { eager: true });
const rawModules = import.meta.glob('../../Pages/Easy/*.jsx', {
  eager: true,
  as: 'raw',
});
const testModules = import.meta.glob('../../__tests__/*.test.jsx', {
  eager: true,
  as: 'raw',
});

const toKebabCase = (str) =>
  str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

export const problems = {};

Object.entries(componentModules).forEach(([componentPath, mod]) => {
  const fileName = componentPath.split('/').pop().replace('.jsx', '');      // "ContactForm"
  const kebabKey = toKebabCase(fileName);                                   // "contact-form"
  const meta = metadata[kebabKey];                                          // from metadata.json

  // Match raw source and test file path
  // const rawCode = Object.keys(rawModules).find((key) => key.includes(`${fileName}.jsx?raw`));
  const rawPath = Object.keys(rawModules).find((key) =>
    key.includes(`${fileName}.jsx`)
  );
  const rawCode = rawPath ? rawModules[rawPath] : '';
  const testPath = Object.keys(testModules).find((key) =>
    key.includes(`${fileName}.test.jsx`)
  );
  // const 
  
  // If no metadata or no default component, skip
  if (!meta || !mod?.default) return;

  problems[kebabKey] = {
    title: meta.title || kebabKey,
    description: meta.description || '',
    companies: meta.companies || [],
    Component: mod.default,
    code: rawCode || '',
    testcases : testPath ? testModules[testPath] : ''
  };
});
