---
id: branding
title: XtendOps Developer Branding
sidebar_label: Branding
slug: /docs/branding
---

The following only applies for XtendOps Developer branding.

## The Logo

![Logo](https://i.imgur.com/yspRiI7.jpg)

Designed by: Tommy Faye Cabrera

## Branding

- `<XO />` is the short text logo
- For longer version use “XtendOps DEV Team” or "XtendOps Developers"
- ‘Courier New’ is the main font but could optionally use others
- Always add reference link to https://developers.xtendops.com
- Don’t emphasize rather make it subtle instead

## Fonts

- Courier New
- Raleway
- Lato
- Roboto

## Colors

### Primary

- Main: #9cc099
- Dark: #1b1e29
- Light: #fafafa

### Secondary

- Main: #ff9e43
- Dark: #303030
- Light: #cecbcb

## Assets

All public assets are available here: https://files.xtendops.com/

## Resources

- Paste this on every website projects(So it'll appear in console):

  ```js
  /* eslint-disable */

  const shadowCss = [
    '3px 3px 0 #1cb799',
    '6px 6px 0 #fd6a33',
    '12px 12px 0 rgb(5,148,68)',
    '15px 15px 0 #fd6a33',
    '18px 18px 0 rgb(4,77,145)',
    '21px 21px 0 #ebebeb',
  ].join(', ')

  const fancyCss = [
    'font-weight: bold',
    'font-size: 60px',
    'padding: 0px 15px',
    'color: #eba142',
    `text-shadow: ${shadowCss}`,
  ].join('; ');

  console.log(
    '%c < XTENDOPS DEV TEAM />' + `%c \n \n \n https://developers.xtendops.com \n`,
    fancyCss,
    'font-size: 15px;',
  );
  ```
