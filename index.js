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
    fontFamily: 'Fira Code',
    fontSize: 18,
    cursorColor: 'rgba(255,255,255,0.5)',
    cursorAccentColor: '#fff',
    colors: {
      black: '#000000',
      red: '#E52222',
      green: '#A6E32D',
      yellow: '#FC951E',
      blue: '#C48DFF',
      magenta: '#FA2573',
      cyan: '#67D9F0',
      white: '#F2F2F2',
      lightBlack: '#666666',
      lightRed: '#E50000',
      lightGreen: '#00D900',
      lightYellow: '#E5E500',
      lightBlue: '#0000FF',
      lightMagenta: '#E500E5',
      lightCyan: '#00E5E5',
      lightWhite: '#E5E5E5',
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
