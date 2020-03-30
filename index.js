const black = '#000000';
const red = '#E52222';
const green = '#A6E32D';
const yellow = '#FC951E';
const blue = '#C48DFF';
const magenta = '#FA2573';
const cyan = '#67D9F0';
const white = '#F2F2F2';

exports.decorateConfig = (config) => {
  const defaultCSS = `
  .header_appTitle {
    display: none;
  }
  .header_windowHeader {
    left: auto;
    position: absolute;
    width: auto;
  }
  .header_windowControls {
    height: 35px;
    border-bottom: 1px solid ${config.borderColor};
  }
  .single-tab .header_windowControls {
    border-bottom: 0;
  }
  .tabs_nav {
    margin-right: 119px;
    top: 0;
  }
  .tabs_list {
    padding-left: 0;
  }
  .tabs_list:before {
    display: none;
  }
  .tab_first {
    border-left-width: 0;
  }
  .terms_terms {
    margin-top: 0;
  }
  .terms_termsShifted {
    margin-top: 34px;
  }
  .tab_tab {
    opacity: 0.5;
  }
  .tab_tab:after {
    display: none;
  }
  .tab_active {
    opacity: 1;
  }
  .tab_active:last-child {
    border-right: 1px solid;
  }
  `;
  return Object.assign({}, config, {
    fontFamily: 'Roboto Mono',
    fontSize: 18,
    cursorColor: 'rgba(255,255,255,0.5)',
    cursorAccentColor: '#fff',
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      lightBlack: LightenDarkenColor(black, 50),
      lightRed: LightenDarkenColor(red, 50),
      lightGreen: LightenDarkenColor(green, 50),
      lightYellow: LightenDarkenColor(yellow, 50),
      lightBlue: LightenDarkenColor(blue, 50),
      lightMagenta: LightenDarkenColor(magenta, 50),
      lightCyan: LightenDarkenColor(cyan, 50),
      lightWhite: LightenDarkenColor(white, 50),
    },
    css: `
    ${config.css || ''}
    ${defaultCSS}
    `,
    opacity: 0.9,
  });
};

exports.getTabsProps = (parentProps, props) => {
  const header = document.querySelector('.header_header')
  if (header && props.tabs.length <= 1) {
    header.classList.add('single-tab');
  } else if (header) {
    header.classList.remove('single-tab');
  }
  return Object.assign({}, parentProps, props)
}

/** @see https://css-tricks.com/snippets/javascript/lighten-darken-color/ */
function LightenDarkenColor(col, amt) {
  var usePound = false;

  if (col[0] === "#") {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col,16);
  var r = (num >> 16) + amt;
  if (r > 255) r = 255;
  else if  (r < 0) r = 0;
  var b = ((num >> 8) & 0x00FF) + amt;
  if (b > 255) b = 255;
  else if  (b < 0) b = 0;
  var g = (num & 0x0000FF) + amt;
  if (g > 255) g = 255;
  else if (g < 0) g = 0;
  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
};
