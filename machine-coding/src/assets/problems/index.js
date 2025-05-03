import metadata from '../../utilities/json/metadata';

const componentModules = import.meta.glob('../../Pages/Questions/**/*.jsx', { eager: true });
const rawModules = import.meta.glob('../../Pages/Questions/**/*.jsx', {
  eager: true,
  as: 'raw',
});
const testModules = import.meta.glob('../../__tests__/Questions/**/*.test.jsx', {
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

  
  const rawPath = Object.keys(rawModules).find((key) =>
    key.endsWith(`/${fileName}.jsx`) || key.includes(`/${fileName}.jsx?`)
  );
  const rawCode = rawPath ? rawModules[rawPath] : '';
 

  const testPath = Object.keys(testModules).find((key) =>
    key.endsWith(`/${fileName}.test.jsx`) || key.includes(`/${fileName}.test.jsx?`)
  );
  
  if (!meta || !mod?.default) {
    console.log("Checking:", componentPath, "->", mod);
    return};

  problems[kebabKey] = {
    title: meta.title || kebabKey,
    description: meta.description || '',
    companies: meta.companies || [],
    Component: mod.default,
    code: rawCode || '',
    testcases : testPath ? testModules[testPath] : ''
  };
});
