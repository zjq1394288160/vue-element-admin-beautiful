const { notEmpty } = require('../utils.js');

module.exports = {
    description:
        '\u535a\u4e91\u524d\u7aef\u654f\u6377\u5f00\u53d1\u5e73\u53f0\u521b\u5efa\u006d\u006f\u0063\u006b',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message:
                '\u8bf7\u8f93\u5165\u006d\u006f\u0063\u006b\u540d\u79f0\u002c\u52ff\u4e0e\u4e4b\u524d\u91cd\u590d\u002c\u7136\u540e\u70b9\u51fb\u56de\u8f66',
            validate: notEmpty('name')
        }
        /* {
          type: 'checkbox',
          name: 'blocks',
          message: 'Blocks:',
          choices: [{
              name: '<template>',
              value: 'template',
              checked: true
            },
            {
              name: '<script>',
              value: 'script',
              checked: true
            },
            {
              name: 'style',
              value: 'style',
              checked: true
            }
          ],
          validate(value) {
            if (value.indexOf('script') === -1 && value.indexOf('template') === -1) {
              return 'View require at least a <script> or <template> tag.';
            }
            return true;
          }
        } */
    ],
    actions: data => {
        const name = '{{name}}';
        const actions = [
            {
                type: 'add',
                path: `mock/controller/${name}.js`,
                templateFile: 'plop-templates/mock/index.hbs',
                data: {
                    name: name
                    /* template: data.blocks.includes('template'),
                 script: data.blocks.includes('script'),
                 style: data.blocks.includes('style') */
                }
            },
            {
                type: 'add',
                path: `src/api/${name}.js`,
                templateFile: 'plop-templates/api/index.hbs',
                data: {
                    name: name
                }
            }
        ];

        return actions;
    }
};
