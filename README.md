# vuepress-baidu-google-analytics

> Google analytics and Baidu tongji plugin for vuepress

## Install

```bash
yarn add -D vuepress-baidu-google-analytics
# OR
npm install -D vuepress-baidu-google-analytics
```

## Usage

```javascript
module.exports = {
  plugins: [
    ['vuepress-baidu-google-analytics', {
      hm: '44b41bc63385a6b27e692272bb1fb393',
      ignore_hash: false
    }]
  ]
}
```

## Options

### hm

- Type: `string`
- Default: `undefined`

Provide the Baidu Tongji ID to enable Baidu Tongji.

### ga

- Type: `string`
- Default: `undefined`

Provide the Google Analytics ID to enable Google Analytics.

### ignore_hash

- Type: `boolean`
- Default: `false`

If enable, same page with different hash (after `#`) will not be count multiple times.