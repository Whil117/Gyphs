import { css } from "@emotion/react";

export const Materialize = css`
  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
  /* Document
   ========================================================================== */
  /**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */
  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    font-family: "Inter", sans-serif;
  }
  /* Sections
   ========================================================================== */
  /**
 * Remove the margin in all browsers.
 */
  body {
    margin: 0;
    background-color: white;
    transition: 0.3s;
  }
  main {
    display: block;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  /* Grouping content
   ========================================================================== */
  /**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }
  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  /* Text-level semantics
   ========================================================================== */
  /**
 * Remove the gray background on active links in IE 10.
 */
  a {
    background-color: transparent;
  }
  /**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }
  /**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  /**
 * Add the correct font size in all browsers.
 */
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  /* Embedded content
   ========================================================================== */
  /**
 * Remove the border on images inside links in IE 10.
 */
  img {
    border-style: none;
  }
  /* Forms
   ========================================================================== */
  /**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }
  /**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */
  button,
  input {
    /* 1 */
    overflow: visible;
  }
  /**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */
  button,
  select {
    /* 1 */
    text-transform: none;
  }
  /**
 * Correct the inability to style clickable types in iOS and Safari.
 */
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  /**
 * Remove the inner border and padding in Firefox.
 */
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  /**
 * Restore the focus styles unset by the previous rule.
 */
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  /**
 * Correct the padding in Firefox.
 */
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }
  /**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
  progress {
    vertical-align: baseline;
  }
  /**
 * Remove the default vertical scrollbar in IE 10+.
 */
  textarea {
    overflow: auto;
  }
  /**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }
  /**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }
  details {
    display: block;
  }
  summary {
    display: list-item;
  }
  template {
    display: none;
  }
  [hidden] {
    display: none;
  }
  /* latin-ext */
  @font-face {
    font-family: "Red Hat Text";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/redhattext/v3/RrQIbohi_ic6B3yVSzGBrMxY04I4Eu2EBVk.woff2)
      format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: "Red Hat Text";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/redhattext/v3/RrQIbohi_ic6B3yVSzGBrMxY04I4HO2E.woff2)
      format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
`;
