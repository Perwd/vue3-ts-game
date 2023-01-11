module.exports = {
  //运行环境
  env: {
    //是否启用浏览器
    browser: true,
    es2021: true,
  },
  //解析器
  parser: "vue-eslint-parser",
  //vue的额外添加规则
  extends: "plugin:vue/vue3-essential",
  // extends: 'plugin:@typescript-eslint/eslint-recommended',
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  // 插件
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "vue/no-parsing-error": [
      2,
      {
        "x-invalid-end-tag": false,
      },
    ],
    // 禁止空块语句
    "no-empty": 2,
    // 分号风格
    "semi-style": 2,
    // 禁止不必要的布尔类型转换
    "no-extra-boolean-cast": 2,
    //禁止在return、throw,continue和break 语句后出现不可达代码
    "no-unreachable": 2,
    // 禁止空函数
    "no-empty-function": 2,
    // 禁止空解构
    "no-empty-pattern": 2,
    // // 禁止魔法数字
    // 'no-magic-numbers': [
    //   2,
    //   {
    //     ignoreArrayIndex: true,
    //     ignore: [-1, 0, 1, 2],
    //   },
    // ],
    "array-bracket-newline": [2, "consistent"],
    // 使用一致的缩进
    indent: [2, 2],
    // 强制对象字面量的键和值之间使用一致的空格
    "key-spacing": 2,
    // 要求箭头函数的箭头之前或之后有空格
    "arrow-spacing": 2,
    // 要求箭头函数的参数使用圆括号
    // "arrow-parens": [2, "as-needed"],
    // "arrow-body-style": 2, // 要求箭头函数体使用大括号
    "no-class-assign": 2, // 不允许修改类声明的变量
    "no-confusing-arrow": 2, // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    "no-const-assign": 2, //不允许改变用const声明的变量
    "no-dupe-class-members": 2, // 不允许类成员中有重复的名称
    "no-duplicate-imports": 2, //禁止重复导入
    "no-new-symbol": 0, // 禁止symbol操作符和new 一起使用lines-between
    "no-useless-computed-key": 2, //禁止在对象中使用不必要的计算属性
    "no-useless-constructor": 2, //禁用不必要的构造函数
    "no-useless-rename": 2, //禁止在 import和export和解构赋值时将引用重命名为相同的名字
    "no-var": 2, //要求使用let或const 而不是var
    "object-shorthand": 2, //要求对象字面量简写语法

    "prefer-const": 1, // ???建议使用const
  },
}
