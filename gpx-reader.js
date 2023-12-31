reearth.ui.show(`
<style>
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/notosans/v27/o-0IIpQlx3QUlC5A4PNr5TRASf6M7Q.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }

  :root {
    --nutral: #BFBFBF;
    --border: #595959;
    --background: #171618;
    --container-bg: #1F1F1F;
    --accent: #3b3cd0;
  }

  html,
  body {
    font-size: 1rem;
    font-family: "Roboto";
    line-height: 22px;
    margin: 0;
    overflow: hidden;
  }


  .extendedh,
  .extendedh {
    width: 44px;
    cursor: pointer;
  }

  .extendedv,
  .extendedv {
    height: 44px;
  }

  .extendedh body,
  .extendedh #wrapper {
    width: 44px;
    border-radius: 4px;
  }

  .extendedv body,
  .extendedv #wrapper {
    max-height: 517px;
    height: 44px;
    border-radius: 4px;
  }

  .height-44 {
    height: 44px;
    width: 44px;
    border-radius: 4px;
  }


  #wrapper {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    max-width: 280px;
    max-height: 600px;
    height: 100%;
    padding: 12px 12px 10px 12px;
    background: var(--background);
    border-radius: 4px;
    height: 100%;
  }

  div#content {
    color: white;
  }

  #content-wrap {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
    max-height: 520px;
    height: 100%;
    overflow: auto;
  }

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 1px var(--border);
    box-shadow: inset 0 0 1px var(--border);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--accent);
    border-radius: 2px;
  }

  p,
  h3,
  span,
  label {
    color: var(--nutral);
  }

  h3,
  h4 {
    font-size: 0.875rem;
  }

  #title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 22px;
    margin: 0px;
    border-radius: 4px 4px 0px 0px;
    cursor: pointer;
    -webkit-transition-duration: 0.7s;
    -o-transition-duration: 0.7s;
    transition-duration: 0.7s;
  }

  span#logo {
    margin-right: 14px;
  }

  span#closed-logo svg {
    margin-top: 8px;
    margin-left: 8px;
  }

  .secondary-btn {
    height: 30px;
    width: 100%;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    margin: 2px;
    margin-top: 12px;
    border-radius: 4px;
    background-color: var(--accent);
    border: solid 1px var(--accent);
    font-size: 0.75rem;
    font-family: "Roboto";
    text-align: center;
    color: white;
    cursor: pointer;
  }

  .new-path__btn {
    display: none;
  }

  .container {
    padding: 10px 4px;
    margin: 8px 0;
    border-radius: 4px;
    background: var(--container-bg);
    border: 1px solid var(--border);
  }

  .container:hover {
    border: 1px solid var(--accent);
  }

  .path-header {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-items: stretch;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    font-size: 0.875rem;
    border-bottom: 1px solid var(--border);
  }

  .input-title {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    font-size: 0.75rem;
    overflow: hidden;
  }

  .remove-path {
    width: 20px;
    height: 20px;
    background-image: url('data:image/svg+xml,<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.4998 3.5L2.49976 3.50001" stroke="%23BFBFBF" stroke-linecap="round" stroke-linejoin="round" /><path d="M6.5 6.5V10.5" stroke="%23BFBFBF" stroke-linecap="round" stroke-linejoin="round" /><path d="M9.5 6.5V10.5" stroke="%23BFBFBF" stroke-linecap="round" stroke-linejoin="round" /><path d="M12.5 3.5V13C12.5 13.1326 12.4473 13.2598 12.3536 13.3536C12.2598 13.4473 12.1326 13.5 12 13.5H4C3.86739 13.5 3.74021 13.4473 3.64645 13.3536C3.55268 13.2598 3.5 13.1326 3.5 13V3.5" stroke="%23BFBFBF" stroke-linecap="round" stroke-linejoin="round" /><path d="M10.5 3.5V2.5C10.5 2.23478 10.3946 1.98043 10.2071 1.79289C10.0196 1.60536 9.76522 1.5 9.5 1.5H6.5C6.23478 1.5 5.98043 1.60536 5.79289 1.79289C5.60536 1.98043 5.5 2.23478 5.5 2.5V3.5" stroke="%23BFBFBF" stroke-linecap="round" stroke-linejoin="round" /></svg>');
    background-repeat: no-repeat;
    background-position: center;
    -webkit-transition-duration: 0.2s;
    -o-transition-duration: 0.2s;
    transition-duration: 0.2s;
  }

  .remove-path:hover {
    width: 20px;
    height: 20px;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.4998 3.5L2.49976 3.50001" stroke="%233B3CD0" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.5 6.5V10.5" stroke="%233B3CD0" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.5 6.5V10.5" stroke="%233B3CD0" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.5 3.5V13C12.5 13.1326 12.4473 13.2598 12.3536 13.3536C12.2598 13.4473 12.1326 13.5 12 13.5H4C3.86739 13.5 3.74021 13.4473 3.64645 13.3536C3.55268 13.2598 3.5 13.1326 3.5 13V3.5" stroke="%233B3CD0" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.5 3.5V2.5C10.5 2.23478 10.3946 1.98043 10.2071 1.79289C10.0196 1.60536 9.76522 1.5 9.5 1.5H6.5C6.23478 1.5 5.98043 1.60536 5.79289 1.79289C5.60536 1.98043 5.5 2.23478 5.5 2.5V3.5" stroke="%233B3CD0" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    background-repeat: no-repeat;
    background-position: center;
    -webkit-transition-duration: 0.2s;
    -o-transition-duration: 0.2s;
    transition-duration: 0.2s;
  }

  .width-group {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 8px 8px 0px 8px;
    overflow: hidden;
  }

  .stroke-width {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: calc(100% - 120px);
    float: right;
    background: var(--background);
    padding: 6px 8px;
    color: var(--nutral);
    border: 1px solid var(--border);
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
  }

  span.maru {
    position: absolute;
    right: 16px;
    top: 14px;
    color: var(--border);
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 16px;
  }


  /* Chrome, Safari, Edge, Opera */
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  *:focus {
    outline: none;
  }

  .color-group {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    overflow: hidden;
    padding: 8px 8px 0px 8px;
  }


  .color-form {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: calc(100% - 104px);
    float: left;
    background: var(--background);
    border: 1px solid var(--border);
  }

  .color {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 24px;
    height: 24px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .color::-webkit-color-swatch {
    border: none;
  }

  .color::-moz-color-swatch {
    border: none;
  }

  .lable-color {
    width: calc(100% - 40px);
    margin-left: 8px;
    color: var(--nutral);
    font-family: "Noto Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;
    background: var(--background);
  }

  .waypoints-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    color: var(--nutral);
    font-family: "Noto Sans";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }


  .waypoints-list summary {
    padding: 8px 6px;
  }

  .markers-accordion {
    margin: 4px 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
    color: var(--nutral);
  }

  .markers-accordion__btn {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: calc(100% - 30px);
    -ms-flex-negative: 0;
    flex-shrink: 0;
    text-align: start;
    background: transparent;
    color: inherit;
    border: none;
    cursor: pointer;
    -webkit-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
  }


  .accordionBtn-Arrow__bottom {
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 8px solid var(--border);
    -webkit-transition-duration: 0.2s;
    -o-transition-duration: 0.2s;
    transition-duration: 0.2s;
  }

  .accordionBtn-Arrow__bottom:hover {
    border-bottom: 8px solid var(--accent)
  }

  .accordionBtn-Arrow__top {
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 8px solid var(--accent);
    -webkit-transition-duration: 0.2s;
    -o-transition-duration: 0.2s;
    transition-duration: 0.2s;
  }

  .marker-icon {
    width: 20px;
    height: 20px;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.35283 15.1569C10.0789 14.5788 10.8047 13.9255 11.484 13.2085C13.4651 11.1173 14.6667 8.9144 14.6667 6.66667C14.6667 2.98477 11.6819 0 8.00004 0C4.31814 0 1.33337 2.98477 1.33337 6.66667C1.33337 8.9144 2.53498 11.1173 4.51607 13.2085C5.19537 13.9255 5.92121 14.5788 6.64726 15.1569C6.90177 15.3596 7.13859 15.5387 7.3519 15.6928C7.48189 15.7867 7.57661 15.8523 7.63024 15.888C7.85417 16.0373 8.14591 16.0373 8.36984 15.888C8.42347 15.8523 8.51819 15.7867 8.64818 15.6928C8.86149 15.5387 9.09831 15.3596 9.35283 15.1569ZM10.5161 12.2915C9.88287 12.9599 9.20246 13.5723 8.52226 14.1139C8.33659 14.2617 8.16158 14.3957 8.00004 14.5151C7.8385 14.3957 7.66349 14.2617 7.47783 14.1139C6.79763 13.5723 6.11721 12.9599 5.48401 12.2915C3.71511 10.4243 2.66671 8.50226 2.66671 6.66667C2.66671 3.72115 5.05452 1.33333 8.00004 1.33333C10.9456 1.33333 13.3334 3.72115 13.3334 6.66667C13.3334 8.50226 12.285 10.4243 10.5161 12.2915ZM8.00004 9.33333C6.52728 9.33333 5.33337 8.13943 5.33337 6.66667C5.33337 5.19391 6.52728 4 8.00004 4C9.4728 4 10.6667 5.19391 10.6667 6.66667C10.6667 8.13943 9.4728 9.33333 8.00004 9.33333ZM9.33337 6.66667C9.33337 7.40305 8.73642 8 8.00004 8C7.26366 8 6.66671 7.40305 6.66671 6.66667C6.66671 5.93029 7.26366 5.33333 8.00004 5.33333C8.73642 5.33333 9.33337 5.93029 9.33337 6.66667Z" fill="%23C7C5C5"/></svg>');
    background-repeat: no-repeat;
    background-position: center;
  }


  .change-marker {
    position: relative;
    width: 25px;
    height: 25px;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18.5 12C20.4 12 22 13.6 22 15.5C22 18.1 18.5 22 18.5 22C18.5 22 15 18.1 15 15.5C15 13.6 16.6 12 18.5 12ZM18.5 16.8C19.2 16.8 19.8 16.2 19.7 15.6C19.7 15 19.1 14.4 18.5 14.4C17.9 14.4 17.3 14.9 17.3 15.6C17.3 16.2 17.8 16.8 18.5 16.8ZM21 7H3V19H13.5C14 19.4142 14.13 19.35 14.5 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V6C2 4.89 2.89 4.5 4 4.5H10L12 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V11.34C21.42 10.84 21.5 10.5 21 10V7Z" fill="%23BFBFBF"/></svg>');
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }

  .change-marker:hover,
  .change-marker:active,
  .change-marker:focus {
    width: 25px;
    height: 25px;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18.5 12C20.4 12 22 13.6 22 15.5C22 18.1 18.5 22 18.5 22C18.5 22 15 18.1 15 15.5C15 13.6 16.6 12 18.5 12ZM18.5 16.8C19.2 16.8 19.8 16.2 19.7 15.6C19.7 15 19.1 14.4 18.5 14.4C17.9 14.4 17.3 14.9 17.3 15.6C17.3 16.2 17.8 16.8 18.5 16.8ZM21 7H3V19H13.5C14 19.4142 14.13 19.35 14.5 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V6C2 4.89 2.89 4.5 4 4.5H10L12 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V11.34C21.42 10.84 21.5 10.5 21 10V7Z" fill="%233B3CD0"/></svg>');
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }

  .panel {
    margin: 4px;
    width: 100%;
    max-height: 0;
    font-family: Noto Sans;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    overflow: hidden;
    -webkit-transition: max-height 0.2s ease-out;
    -o-transition: max-height 0.2s ease-out;
    transition: max-height 0.2s ease-out;
  }

  .panel ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .active {
    color: var(--accent);
  }

  .no-points {
    margin: 0;
  }

  .show {
    display: block;
    cursor: pointer;
  }

  .hide {
    display: none;
  }

  .markers-list {
    position: fixed;
    top: 35%;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    min-width: 150px;
    width: fit-content;
    padding: 6px 8px;
    background-color: var(--background);
    color: var(--nutral);
    font-family: Noto Sans;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
    border-radius: 4px;
    border: 2px solid var(--accent);
    list-style: none;
    z-index: 1;
  }
</style>
<div class="height-44" id="wrapper">
  <h3 id="title" onclick="handleCloseOpenPopup(event)">
    <span id="logo">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="1.66667" cy="1.66667" r="1.66667" transform="matrix(-1 0 0 1 4.33334 1)" fill="#BFBFBF" />
        <circle cx="1.66667" cy="1.66667" r="1.66667" transform="matrix(-1 0 0 1 8.33334 11)" fill="#BFBFBF" />
        <ellipse cx="1.66667" cy="1.66667" rx="1.66667" ry="1.66667" transform="matrix(-1 0 0 1 19.1667 15.8333)"
          fill="#BFBFBF" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 2.5L2.40001 3L6.40001 13L17 18.5V17.5L7.40001 12.5L3 2.5Z"
          fill="#BFBFBF" />
      </svg>
    </span>

    <p class="title-p" id="plugin-name">GPX Reader</p>
    <span id="close" data-stt="0"></span>
  </h3>
  <div id="content" class="hide">
    <button id="new-path" class="secondary-btn">New Path</button>
    <div class="new-path__btn">
      <input type="file" id="input" />
    </div>
    <div id="content-wrap">
      <select class="markers-list hide" id="markersList">
        <option value="">Choose an icon</option>
      </select>
    </div>
  </div>
</div>
<!-- /content -->

</div>

<script src="https://unpkg.com/togeojson@0.16.0/togeojson.js"></script>

<script>

  let expanded = false;
  let wapperElm = document.getElementById("wrapper");
  let contentWrap = document.getElementById('content-wrap');
  let heightWrapper = wapperElm.scrollHeight + contentWrap.scrollHeight;
  let heightWp = wapperElm.offsetHeight < 600 ? 600 : wapperElm.offsetHeight;

  let reearth;
  var cesium;
  let layers;
  let property;
  let imageList;
  let newProperty;


  const newPath = document.getElementById("new-path");
  let markersList = document.getElementById("markersList");
  let buttons;

  let i = 0;
  let containerId
  let pointLat;
  let pointLng;
  let pointHeight;
  let pointName;
  let pointDesc;
  let waypointsListId;
  let inputForWidthId;
  let heightId = "height";
  let latId = "lat";
  let longId = "long";
  let fileName;


  window.addEventListener("message", async function (e) {
    if (e.source !== parent) return;
    reearth = e.source.reearth;
    layers = reearth.layers.layers;
    newProperty = e.data.property;

    // getting data from widget to create list uploaded images to change markers
    if (JSON.stringify(property) != JSON.stringify(newProperty)) {
      property = newProperty;
      imageList = property.images;
      handleImageList(imageList);
    }
  })


  // put the triger to upload file on button
  const trigerInput = () => input.click();
  newPath.addEventListener('click', trigerInput);


  // upload gpx file
  const loaded = (e) => {
    const fr = e.target;
    var result = fr.result;

    // console.log('Result:', result);
    handleFileList(result);
  }

  const errorHandler = (e) => {
    alert('Error: ' + e.target.error.name);
  }

  // reading file 
  const processFile = (file) => {
    const fr = new FileReader();

    fr.readAsDataURL(file);
    fr.addEventListener('loadend', loaded);
  }

  // getting file from input 
  document.getElementById('input').addEventListener('change', (e) => {
    const file = document.getElementById('input').files[0];
    fileName = file.name;
    if (file) {
      processFile(file)
    }
    // reset after each upload, allowing to consecutively upload the same file without any restrictions
    e.target.value = null;
  });



  function handleCloseOpenPopup(e) {
    // let wapperElm = document.getElementById("wrapper");

    if (  e.target.id == "title" || e.target.classList.contains("title-p") ||
      (document.getElementById(e.target.id) !== null && document.getElementById(e.target.id).parentNode.id == "title")) {
      parent.postMessage({ type: "resize", expanded, heightWp }, "*");
      if (wapperElm !== null) {
        wapperElm.classList.remove("height-44");
        document.getElementById("content").classList.remove("hide");
      }
      if (expanded) {
        document.documentElement.classList.add("extendedh", "extendedv");
      } else {
        document.documentElement.classList.remove("extendedh", "extendedv");
        document.getElementById("content").classList.remove("hide");
      }
      expanded = !expanded
    } else {
      if (e.target.tagName === "path" || e.target.tagName === "svg" || e.target.tagName === "g") {
        if (e.target.closest("#title")) {
          parent.postMessage({ type: "resize", expanded, heightWp }, "*");
          if (wapperElm !== null) {
            wapperElm.classList.remove("height-44");
            document.getElementById("content").classList.remove("hide");
          }
          if (expanded) {
            document.documentElement.classList.add("extendedh", "extendedv");
            document.getElementById("markersList").classList.add('hide');
          } else {
            document.documentElement.classList.remove("extendedh", "extendedv");
            document.getElementById("content").classList.remove("hide");
          }
          expanded = !expanded
        }
      }
    }
  }

  // Handle Update IFrame Size
  function updateIframeSize() {
    let newWrapperElm = document.getElementById("wrapper");
    let heightWp = newWrapperElm.offsetHeight;
    let expanded = false;
    parent.postMessage({ type: "resize", expanded, heightWp }, "*");
  }

  // add new markers and push into a new features array
  function addMarkersLayers(features, removePathBtnId) {
    if (features.length != 0) {
      let arreymarkerId = Array();
      for (let ind = 0; ind < features.length; ind++) {
        // add for each Marker accordion
        features.forEach(function (feature, ind) {
          // getting coordinates from defoult gpx markers
          pointLat = feature.geometry.coordinates[1];
          pointLng = feature.geometry.coordinates[0];
          pointHeight = feature.geometry.coordinates[2];
          // getting name from defoult gpx markers
          pointName = feature.properties.name;

          pointDesc = feature.properties.desc;

          // making text explanation using coordinates string for new marker
          function textlocation(x, y, z) {
            x = pointLat;
            y = pointLng;
            z = pointHeight || "Landed";
            let string = "Location \\n Latitude: " + x + "\\n" + "Longitude: " + y + "\\n" + "Height: " + z;
            return string;
          }

          // add new reearth marker insted defoult gpx markers
          let markerId = reearth.layers.add({
            extensionId: "marker",
            isVisible: true,
            title: pointName,
            property: {
              default: {
                heightReference: "clamp",
                height: pointHeight,
                location: {
                  lat: pointLat,
                  lng: pointLng,
                },
                label: true,
                labelText: pointName,
                labelTypography: {
                  fontSize: 14
                }
              },
            },
            infobox: {
              blocks: [
                {
                  extensionId: "textblock",
                  pluginId: "reearth",
                  property: {
                    default: {
                      text: textlocation(),
                    }
                  }
                },
                {
                  extensionId: "textblock",
                  pluginId: "reearth",
                  property: {
                    default: {
                      text: pointDesc,
                    }
                  }
                }
              ],
              property: {
                default: {
                  title: pointName,
                }
              }
            },
            tags: [],
          });

          createMarkerAccordion(feature, ind, markerId)
          arreymarkerId.push(markerId);
        })

        function removeMarkers() {
          hideMarkersLayers(arreymarkerId);
          // console.log(arreymarkerId);
        }

        document.getElementById(removePathBtnId).addEventListener('click', removeMarkers);
        if (ind = features.length) break;
      }
    } else {
      let showNoPoints = document.createElement('p');
      showNoPoints.textContent = "No way points";
      showNoPoints.classList.add('no-points');
      document.getElementById(markersAccordionId).appendChild(showNoPoints);
    }

    function hideMarkersLayers(arreymarkerId) {
      reearth.layers.layers;
      for (let i = 0; i < arreymarkerId.length; i++) {
        reearth.layers.hide(arreymarkerId[i]);
      }
    }
  }

  // create HTML accordion block for Marker
  function createMarkerAccordion(feature, ind, markerId) {
    let markersAccordionBtn = document.createElement('div');
    markersAccordionBtn.classList.add('markers-accordion__btn');

    let accordionBtnArrow = document.createElement('span');
    accordionBtnArrow.classList.add('accordionBtn-Arrow__bottom');

    let markerIcon = document.createElement('span');
    markerIcon.classList.add('marker-icon');

    let markersAccordionBtnText = document.createElement('span');
    markersAccordionBtnText.textContent = "Marker " + pointName;

    let panel = document.createElement('div');
    panel.classList.add('panel');
    let panelId = "panel" + ind;
    panel.id = panelId;

    let ul1 = document.createElement('ul');

    let latLabel = document.createElement('li');
    latLabel.textContent = "Latitude: ";

    latId = latId + ind;
    let latTxt = document.createElement('li');
    latTxt.id = latId;
    latTxt.textContent = pointLat;

    let ul2 = document.createElement('ul');

    let longLabel = document.createElement('li');
    longLabel.textContent = "Longitude: ";

    longId = longId + ind;
    let longTxt = document.createElement('li');
    longTxt.id = longId;
    longTxt.textContent = pointLng;

    let ul3 = document.createElement('ul');

    let heightLabel = document.createElement('li');
    heightLabel.textContent = "Height: ";


    heightId = heightId + ind;
    let heightTxt = document.createElement('li');
    heightTxt.id = heightId;
    heightTxt.textContent = pointHeight || "Landed";

    // create the hidden input that will collect markers id to hide them
    let markerValue = document.createElement('div');
    markerValue.classList.add('change-marker');
    let markerValueId = markerId;
    markerValue.id = markerValueId;
    markerValue.setAttribute('markerId', markerId);

    document.getElementById(markersAccordionId).appendChild(markersAccordionBtn);
    markersAccordionBtn.appendChild(accordionBtnArrow);
    markersAccordionBtn.appendChild(markerIcon);
    markersAccordionBtn.appendChild(markersAccordionBtnText);
    document.getElementById(markersAccordionId).appendChild(markerValue);
    document.getElementById(markersAccordionId).appendChild(panel);
    panel.appendChild(ul1);
    ul1.appendChild(latLabel);
    ul1.appendChild(latTxt);
    panel.appendChild(ul2);
    ul2.appendChild(longLabel);
    ul2.appendChild(longTxt);
    panel.appendChild(ul3);
    ul3.appendChild(heightLabel);
    ul3.appendChild(heightTxt);

    // close and open accordion
    handleAccordion(markersAccordionBtn, panel, accordionBtnArrow);
  };

  // handle accordion for each Marker
  function handleAccordion(markersAccordionBtn, panel, accordionBtnArrow) {

    markersAccordionBtn.addEventListener("click", function () {
      accordionBtnArrow.classList.toggle('accordionBtn-Arrow__bottom');
      accordionBtnArrow.classList.toggle('accordionBtn-Arrow__top');
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });

  }

  function handleImageList(data) {

    let imageListArray = [];
    imageListArray.push({
      id: "default",
      type: "icon",
      name: "Default",
      url: "no",
      size: 1
    });

    data?.map((item) => {
      imageListArray.push({
        id: item.id,
        type: item.imageOptions || "image",
        name: item.imageName,
        url: item.imageUrl,
        size: item.imageSize || 1
      });
    });

    // console.log("imageListArray: ", imageListArray);

    let newImageArray = Array();

    for (let i = 0; imageListArray.length > i; i++) {
      let imageId = imageListArray[i].id;
      let imageName = imageListArray[i].name;
      let imageUrl = imageListArray[i].url;
      let imageSize = imageListArray[i].size;
      // sorting items with full data
      if ((imageId && imageName && imageUrl && imageSize) && (imageId !== imageListArray[imageListArray.length - 1]) && (imageId != undefined) && (imageId != "default")) {
        newImageArray.push(imageListArray[i]);
      }
      createOptions(newImageArray);
      // console.log("newArray: ", newArray);
    }
  }

  // creating select block for choosing image
  function createOptions(data) {

    // remove previous block to prevent double adding items
    document.getElementById("markersList").remove();

    let markersList = document.createElement('select');
    markersList.id = "markersList";
    markersList.classList.add('markers-list');
    markersList.classList.add('hide');

    let firstOtion = document.createElement('option');
    firstOtion.textContent = "Choose an icon";
    markersList.appendChild(firstOtion);

    contentWrap.appendChild(markersList);

    // console.log(markersList);

    data.forEach((item) => {
      let imageNameBlock = document.createElement('option');
      imageNameBlock.innerHTML = item.name;
      imageNameBlock.setAttribute('id', item.id);
      imageNameBlock.setAttribute('value', item.url);
      imageNameBlock.setAttribute('imageSize', item.size);
      markersList.appendChild(imageNameBlock);
    })

    buttons = document.querySelectorAll('.change-marker');
    // console.log("change-marker btns : ", buttons);

    let buttonPressed = e => {
      markersList.classList.toggle('hide');
      markersList.classList.toggle('show');
      // console.log(markersList);

      // Get ID of Clicked Element
      let markerId = e.target.id;

      // getting properties from selected option 
      function onChange() {
        var imageUrl = markersList.options[markersList.selectedIndex].value;
        var imageSize = markersList.options[markersList.selectedIndex].getAttribute('imageSize');
        let imageSizeToNumber = +imageSize;

        reearth.layers.overrideProperty((markerId), {
          default: {
            image: imageUrl,
            imageSize: imageSizeToNumber,
          }
        });

      }
      markersList.onchange = onChange;
      onChange();

    }
    for (let button of buttons) {
      button.addEventListener("click", buttonPressed);
    }
  }

  //creating HTML block for path 
  function createPathMenu(geoJsonLineOnly, gpxPathLayerId, wayPoints) {
    i++;
    let pathContainer = document.createElement('div');
    pathContainer.classList.add('container');
    containerId = "container" + i;
    pathContainer.setAttribute('id', containerId);

    // creating new blocks and elements 
    let pathBody = document.createElement('div');
    pathBody.classList.add('path-body');

    let pathHeader = document.createElement('div');
    pathHeader.classList.add('path-header');

    let fileTitle = document.createElement('span');
    fileTitle.classList.add('path-title');
    let fileNameValue = fileName;
    fileTitle.innerHTML = fileNameValue;

    let removePathBtn = document.createElement('span');
    removePathBtn.classList.add('remove-path');
    let removePathBtnId = "remove" + i;
    removePathBtn.id = removePathBtnId;

    let formGroupForWidth = document.createElement('div');
    formGroupForWidth.classList.add('width-group');

    let labelForWidth = document.createElement('span');
    labelForWidth.classList.add('input-title');
    labelForWidth.textContent = "Stroke Width";

    inputForWidthId = 'stroke-width' + i;
    let inputForWidth = document.createElement('input');
    inputForWidth.classList.add('stroke-width');
    inputForWidth.id = inputForWidthId;
    inputForWidth.setAttribute('type', 'number');
    inputForWidth.setAttribute('value', '1');
    inputForWidth.setAttribute('placeholder', '1');
    inputForWidth.setAttribute('min', '1');

    let pxForWidth = document.createElement('span');
    pxForWidth.classList.add('maru');
    pxForWidth.textContent = "px";

    let colorGroup = document.createElement('div');
    colorGroup.classList.add('color-group');

    let titleForColor = document.createElement('span');
    titleForColor.classList.add('input-title');
    titleForColor.textContent = "Stroke Color";

    let colorForm = document.createElement('div');
    colorForm.classList.add('color-form');

    let inputForColor = document.createElement('input');
    inputForColor.classList.add('color');
    let inputForColorId = "path-color" + i;
    inputForColor.id = inputForColorId;
    inputForColor.setAttribute('type', 'color');
    inputForColor.setAttribute('value', "#FDF300");


    let lableForColor = document.createElement('input');
    lableForColor.classList.add('lable-color');
    lableForColor.setAttribute('type', 'text');
    let lableForColorId = "colorLable" + i;
    lableForColor.id = lableForColorId;
    lableForColor.setAttribute('value', "#FDF300");

    let waypointsList = document.createElement('details');
    waypointsList.classList.add('waypoints-list');
    waypointsListId = "Waypoints" + i;
    waypointsList.id = waypointsListId;

    let summary = document.createElement('summary');
    summary.textContent = "Waypoints List";

    let markersAccordion = document.createElement('div');
    markersAccordion.classList.add('markers-accordion');
    markersAccordionId = "markers-accordion" + i;
    markersAccordion.id = markersAccordionId;

    // hidden attribute will control blocks(with path and layer) separately from other blocks
    let pathValue = document.createElement('input');
    pathValue.setAttribute('type', 'hidden');
    pathValue.setAttribute('pathId', gpxPathLayerId)
    // console.log(gpxPathLayerId);

    document.getElementById('content-wrap').appendChild(pathContainer);
    pathContainer.appendChild(pathBody);
    pathBody.appendChild(pathHeader);
    pathHeader.appendChild(fileTitle);
    pathHeader.appendChild(removePathBtn);
    pathBody.appendChild(formGroupForWidth);
    formGroupForWidth.appendChild(labelForWidth);
    formGroupForWidth.appendChild(inputForWidth);
    formGroupForWidth.appendChild(pxForWidth);
    pathBody.appendChild(colorGroup);
    colorGroup.appendChild(titleForColor);
    colorGroup.appendChild(colorForm);
    colorForm.appendChild(inputForColor);
    colorForm.appendChild(lableForColor);
    pathBody.appendChild(waypointsList);
    waypointsList.appendChild(summary);
    waypointsList.appendChild(markersAccordion);
    pathContainer.appendChild(pathValue);


    // getting last value to change stroke width and override layer properties
    document.getElementById(inputForWidthId).addEventListener('change', rewriteAllProperties);

    // change text in an input for color
    document.getElementById(inputForColorId).addEventListener('input', () => {
      let colorCode = inputForColor.value.toUpperCase();
      document.getElementById(inputForColorId).value = colorCode;
      document.getElementById(lableForColorId).value = colorCode;
    });

    document.getElementById(lableForColorId).addEventListener('change', () => {
      let colorTxt = lableForColor.value;
      document.getElementById(inputForColorId).value = colorTxt;
      rewriteAllProperties();
    });

    // getting last value to change paths color and override layer properties
    document.getElementById(inputForColorId).addEventListener('change', rewriteAllProperties);

    function rewriteAllProperties() {

      let strokeWidth = inputForWidth.value;
      // console.log(strokeWidth);

      let colorCode = inputForColor.value;
      // console.log(colorCode);

      let jsonProperties = { "stroke-width": strokeWidth, "fill": colorCode, "stroke": colorCode };
      let jsonPropertiesString = JSON.stringify(jsonProperties);

      geoJsonLineOnly.features.forEach(function (feature) {
        feature.properties = JSON.parse(jsonPropertiesString);
      })

      const geoJsonString = JSON.stringify(geoJsonLineOnly);

      const blob = new Blob([geoJsonString], { type: 'application/json' });
      const link = URL.createObjectURL(blob);

      let pathId = pathValue.getAttribute('pathId');

      parent.postMessage({ type: "Properties", pathId, link }, "*");
    }

    // add markers layers and html blocks
    addMarkersLayers(wayPoints, removePathBtnId);

    // remove path layer and html block, hide list of images for markers
    function removePath() {
      removePathBtn.parentElement.parentElement.parentElement.remove();
      document.getElementById("markersList").classList.add('hide');
      document.getElementById("markersList").remove('show');
      let pathId = pathValue.getAttribute('pathId');
      hidePathLayer(pathId);
    }

    document.getElementById(removePathBtnId).addEventListener('click', removePath);

  }


  function hidePathLayer(pathId) {
    reearth.layers.layers;
    reearth.layers.hide(pathId);
  }

  // add layer for line
  function addPathLayer(geoJsonLineOnly, wayPoints) {
    const geoJsonString = JSON.stringify(geoJsonLineOnly);
    const blob = new Blob([geoJsonString], { type: 'application/json' });
    const link = URL.createObjectURL(blob);

    let gpxPathLayerId = reearth.layers.add({
      extensionId: "resource",
      isVisible: true,
      title: "Path",
      property: {
        default: {
          url: link,
          type: "geojson",
          clampToGround: true
        },
      },
    });
    // add HTML block for path
    createPathMenu(geoJsonLineOnly, gpxPathLayerId, wayPoints);
  }

  // converting geoJson to useble link and add layer
  function handleGeojson(geoJsonData) {

    // future collection for array with out defaul gpx markers
    let geoJsonLineOnly = {
      "type": "FeatureCollection",
      "features": [],
    };

    // separating lines and points into different arrays
    let lines = Array();
    let wayPoints = Array();
    for (let i = 0; i < geoJsonData.features.length; i++) {
      if ((geoJsonData.features[i].geometry.type === "LineString" || "MultiLineString") &&
        (geoJsonData.features[i].geometry.type !== "Point")) {
        lines.push(geoJsonData.features[i]);
      } else if (geoJsonData.features[i].geometry.type === "Point") {
        wayPoints.push(geoJsonData.features[i]);
      }
    }
    geoJsonLineOnly.features = lines;

    addPathLayer(geoJsonLineOnly, wayPoints);

    // console.log("geoJsonLineOnly", geoJsonLineOnly);
    // console.log("wayPoints", wayPoints);
  }

  // converting gpx file to geoJson
  function handleFileSelectFromURL(url) {
    return fetch(url)
      .then(response => response.text())
      .then(gpxString => {
        const parser = new DOMParser();
        const gpxDocument = parser.parseFromString(gpxString, 'text/xml');
        const geoJson = toGeoJSON.gpx(gpxDocument);
        // console.log("geojson: ", geoJson); // output GeoJSON object to console (optional)

        return geoJson
      });

  }

  // set properties for converted gpx file
  function handleFileList(file) {
    handleFileSelectFromURL(file)
      .then(data => {
        data.features.forEach(function (feature) {
          feature.properties.stroke = feature.properties.stroke || "#FDF300";
          feature.properties.fill = feature.properties.fill || "#FDF300";
        })
        handleGeojson(data)
      })
  }

</script>
`,
{ width: 44, height: 44 }
);

reearth.on("update", send);
send();

function send() {
reearth.ui.postMessage({
property: reearth.widget.property,
layer: reearth.layers.layers
})
}


reearth.on("message", (msg) => {
if (msg.type === "resize") {
reearth.ui.resize?.(
msg.expanded ? 44 : 280,
msg.expanded ? 44 : msg.heightWp,
msg.expanded ? undefined : false
);
}
});

reearth.on("message", (msg) => {
if (msg.type == "Properties") {
reearth.layers.overrideProperty(msg.pathId, {
default: {
url: msg.link,
type: "geojson",
clampToGround: true
},
})
}
})