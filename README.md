# vuepress-plugin-baidu-google-analytics

[![vuepress](https://img.shields.io/badge/vuepress-%3E%3D%201.0-brightgreen.svg)](https://v1.vuepress.vuejs.org/)
[![npm](https://img.shields.io/npm/v/vuepress-plugin-baidu-google-analytics.svg)](https://www.npmjs.com/package/vuepress-plugin-baidu-google-analytics)
![npm](https://img.shields.io/npm/dt/vuepress-plugin-baidu-google-analytics.svg)

Google analytics and Baidu tongji plugin for vuepress

## Install

```bash
yarn add -D vuepress-plugin-baidu-google-analytics
# OR
npm install -D vuepress-plugin-baidu-google-analytics
```

## Usage

```javascript
module.exports = {
  plugins: [
    ['vuepress-plugin-baidu-google-analytics', {
      hm: 'abcdefghijklmnopqrstuvwxyz123456',
      ga: 'abcdefghijklmnopqrstuvwxyz123456',
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