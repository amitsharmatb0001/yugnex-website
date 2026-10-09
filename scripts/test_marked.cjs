// scripts/test_marked.cjs
const { Marked } = require('marked');

const customMarked = new Marked();

const renderer = {
  heading(arg1, arg2, arg3) {
    console.log('heading arguments:', {
      arg1Type: typeof arg1,
      arg1IsObject: arg1 && typeof arg1 === 'object',
      arg1Keys: arg1 && typeof arg1 === 'object' ? Object.keys(arg1) : null,
      arg2Type: typeof arg2,
      arg3Type: typeof arg3
    });
    return '<h1>test</h1>';
  },
  code(arg1, arg2, arg3) {
    console.log('code arguments:', {
      arg1Type: typeof arg1,
      arg1IsObject: arg1 && typeof arg1 === 'object',
      arg1Keys: arg1 && typeof arg1 === 'object' ? Object.keys(arg1) : null,
      arg2Type: typeof arg2,
      arg3Type: typeof arg3
    });
    return '<pre>test</pre>';
  }
};

customMarked.use({ renderer });
customMarked.parse('## 01 Test Heading\n\n```javascript\nconst a = 1;\n```');
