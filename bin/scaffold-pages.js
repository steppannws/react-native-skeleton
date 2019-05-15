const glob = require('glob');
const toPascalCase = require('to-pascal-case');
const toConstantCase = require('to-constant-case');
const path = require('path');
const fs = require('fs');

const routesTemplate = `
import Pages from '../enum/Pages';

{{importPages}}

const routes = [
    {{routesList}}
  ];


export default routes;
`;

const pagesTemplate = `
export default {
    {{pagesKeysList}}
  };
`;

const importPages = [];
const routesList = [];
const pagesKeysList = [];
const pathToFile = path.resolve('./src/navigation/routes.js');

glob('./src/pages/**/index.js', null, (error, files) => {
  files.forEach(file => {
    const pathAbsolute = path.resolve(file);
    const normList = file.split('/');
    const normalizedPath = file.split('/').splice(3, normList.length - 4);
    const normalizedImportName = normalizedPath.map(item => toPascalCase(item)).join('');
    const normalizedConstName = normalizedPath.map(item => toConstantCase(item)).join('_');
    let pathToFileList = pathToFile.split(path.sep);
    pathToFileList.pop();
    pathToFileList = pathToFileList.join(path.sep);

    let relativePathToFile = path.relative(pathToFileList, pathAbsolute).replace('/index.js', '');
    relativePathToFile = relativePathToFile.replace(/\\/g, '/');

    importPages.push(`import ${normalizedImportName} from '${relativePathToFile}';`);
    routesList.push(
      `{id:Pages.${normalizedConstName}, screen:${normalizedImportName}},`
      // `{id:Pages.${normalizedConstName}, screen:withBaseHOC(${normalizedImportName})},`
    );

    pagesKeysList.push(`${normalizedConstName}:'${normalizedImportName}',`);
  });

  let parsedRoutesTemplate = routesTemplate;
  let parsedPagesTemplate = pagesTemplate;

  parsedRoutesTemplate = parsedRoutesTemplate.replace('{{importPages}}', importPages.join('\n'));
  parsedRoutesTemplate = parsedRoutesTemplate.replace('{{routesList}}', routesList.join('\n'));

  parsedPagesTemplate = parsedPagesTemplate.replace('{{pagesKeysList}}', pagesKeysList.join('\n'));

  fs.writeFileSync('./src/navigation/routes.js', parsedRoutesTemplate);
  fs.writeFileSync('./src/enum/Pages.js', parsedPagesTemplate);
});
