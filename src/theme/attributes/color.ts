export const lightBaseColor = {
  primary500: '#260308',
  primary400: '#4D0610',
  primary300: '#730917',
  primary200: '#9A0C1F',
  primary100: '#AD0E23',
  primary0: '#C00F27',
  primary10: '#C6273D',
  primary20: '#CD3F52',
  primary30: '#D96F7D',
  primary40: '#E69FA9',
  primary50: '#F2CFD4',
  primary60: '#F9E7E9',

  gray500: '#070707',
  gray400: '#151515',
  gray350: '#252525',
  gray300: '#242424',
  gray200: '#323232',
  gray100: '#404040',
  gray0: '#474747',
  gray10: '#595959',
  gray20: '#7E7E7E',
  gray30: '#A3A3A3',
  gray40: '#C8C8C8',
  gray50: '#DADADA',
  gray60: '#EDEDED',

  white: '#FDFDFD',
  white10: '#FAFAFA',
  white500: '#FFFFFF',

  success500: '#0C4A22',
  success400: '#116F32',
  success300: '#14823B',
  success200: '#1AA74C',
  success100: '#1AA74C',
  success0: '#1DB954',
  success10: '#4AC776',
  success20: '#61CE87',
  success30: '#77D598',
  success40: '#8EDCAA',
  success50: '#A5E3BB',
  success60: '#D2F1DD',

  warning500: '#805300',
  warning400: '#996300',
  warning300: '#B37300',
  warning200: '#CC8400',
  warning100: '#E69500',
  warning0: '#FFA500',
  warning10: '#FFAE1A',
  warning20: '#FFB733',
  warning30: '#FFC04D',
  warning40: '#FFD280',
  warning50: '#FFDB99',
  warning60: '#FFEDCC',

  error500: '#661813',
  error400: '#99231D',
  error300: '#B32922',
  error200: '#CC2F26',
  error100: '#E6352B',
  error0: '#FF3B30',
  error10: '#FF4F45',
  error20: '#FF766E',
  error30: '#FF8983',
  error40: '#FF9D98',
  error50: '#FFB1AC',
  error60: '#FFC4C1',

  screenBg: '#F6F6F6',
}

export const darkBaseColor = {
  primary500: '#24050A',
  primary400: '#450E16',
  primary300: '#6D0F1C',
  primary200: '#8A1C2B',
  primary100: '#9A2131',
  primary0: '#AC2336',
  primary10: '#AE3F4E',
  primary20: '#B55763',
  primary30: '#C7818B',
  primary40: '#DAABB2',
  primary50: '#ECD5D8',
  primary60: '#F6EAEB',

  gray500: '#0B0B0B',
  gray400: '#202020',
  gray350: '#252525',
  gray300: '#363636',
  gray200: '#4B4B4B',
  gray100: '#606060',
  gray0: '#6B6B6B',
  gray10: '#7A7A7A',
  gray20: '#979797',
  gray30: '#B5B5B5',
  gray40: '#D3D3D3',
  gray50: '#E1E1E1',
  gray60: '#F0F0F0',

  white: '#FDFDFD',
  white10: '#FAFAFA',
  white500: '#FFFFFF',

  success500: '#0A431E',
  success400: '#0D5426',
  success300: '#127535',
  success200: '#15863D',
  success100: '#179644',
  success0: '#27AE60',
  success10: '#31B05E',
  success20: '#48B970',
  success30: '#5FC182',
  success40: '#76CA94',
  success50: '#A3DCB7',
  success60: '#D1EDDB',

  warning500: '#805300',
  warning400: '#996300',
  warning300: '#B37300',
  warning200: '#CC8400',
  warning100: '#E69500',
  warning0: '#FFA500',
  warning10: '#FFAE1A',
  warning20: '#FFB733',
  warning30: '#FFC04D',
  warning40: '#FFD280',
  warning50: '#FFDB99',
  warning60: '#FFEDCC',

  error500: '#661813',
  error400: '#99231D',
  error300: '#B32922',
  error200: '#CC2F26',
  error100: '#E6352B',
  error0: '#FF3B30',
  error10: '#FF4F45',
  error20: '#FF766E',
  error30: '#FF8983',
  error40: '#FF9D98',
  error50: '#FFB1AC',
  error60: '#FFC4C1',

  screenBg: '#1C1C1E',
}

export const lightColor = {
  mode: 'light',

  typo: {
    text: lightBaseColor.gray500,
    label: lightBaseColor.gray300,
    error: lightBaseColor.primary0,
    statusNew: '#C6C6C8',
    ...lightBaseColor,
  },

  statusBar: {
    ...lightBaseColor,
  },

  breadcrumb: {
    ...lightBaseColor,
  },

  header: {
    ...lightBaseColor,
  },

  refresh: {
    ...lightBaseColor,
  },

  container: {
    border: lightBaseColor.gray40,
    ...lightBaseColor,
  },

  footer: {
    footerBg: lightBaseColor.gray60,
    ...lightBaseColor,
  },

  drawer: {
    ...lightBaseColor,
  },

  button: {
    primaryGradient: ['#F21235', '#900712'],
    primaryDisabled: ['#c8c8c8', '#c8c8c8'],
    primaryPressed: ['#9A2131', '#9A2131'],
    primaryLoading: ['#9A2131', '#9A2131'],
    deleteBtnBgColor: lightBaseColor.white10,
    ...lightBaseColor,
  },

  form: {
    inputBgColor: lightBaseColor.white,
    inputBdColor: lightBaseColor.gray40,
    placeholderTextColor: lightBaseColor.gray500,
    switchEnableBgColor: lightBaseColor.primary0,
    switchUnableBgColor: lightBaseColor.gray30,
    switchEnableHandleColor: lightBaseColor.white,
    switchUnableHandleColor: lightBaseColor.gray50,
    activeRBgColor: lightBaseColor.primary0,
    RadioBdColor: lightBaseColor.gray400,
    ...lightBaseColor,
  },

  card: {
    bgColor: lightBaseColor.white10,
    bottomBdColor: lightBaseColor.gray60,
    keyBoardBgColor: lightBaseColor.gray60,
    keyBoardKeyBgColor: lightBaseColor.white10,
    ...lightBaseColor,
  },

  list: {
    ...lightBaseColor,
  },

  modal: {
    modalBgColor: lightBaseColor.white,
    ...lightBaseColor,
  },

  actionSheet: {
    bgColor: lightBaseColor.white,
    ...lightBaseColor,
  },

  loading: {
    ...lightBaseColor,
  },

  icon: {
    text: lightBaseColor.gray500,
    footerIconBg: lightBaseColor.gray30,
    error: lightBaseColor.primary0,
    ...lightBaseColor,
  },

  table: {
    ...lightBaseColor,
  },

  tab: {
    ...lightBaseColor,
    activeBgColor: lightBaseColor.white,
    unActiveBgColor: lightBaseColor.white,
    activeBdColor: lightBaseColor.gray500,
    unActiveBdColor: 'transparent',
  },

  toast: {
    bgColor: lightBaseColor.white500,
    ...lightBaseColor,
  },
}

export const darkColor = {
  mode: 'dark',

  typo: {
    text: darkBaseColor.white,
    label: darkBaseColor.gray60,
    error: darkBaseColor.primary0,
    statusNew: '#C6C6C8',
    ...darkBaseColor,
  },

  statusBar: {
    ...darkBaseColor,
  },

  breadcrumb: {
    ...darkBaseColor,
  },

  header: {
    ...darkBaseColor,
  },

  refresh: {
    ...darkBaseColor,
  },

  container: {
    border: darkBaseColor.gray60,
    ...darkBaseColor,
  },

  footer: {
    footerBg: darkBaseColor.gray400,
    ...darkBaseColor,
  },

  drawer: {
    ...darkBaseColor,
  },

  button: {
    primaryGradient: ['#F21235', '#900712'],
    primaryDisabled: ['#363636', '#363636'],
    primaryPressed: ['#9A2131', '#9A2131'],
    primaryLoading: ['#9A2131', '#9A2131'],
    deleteBtnBgColor: darkBaseColor.screenBg,
    ...darkBaseColor,
  },

  form: {
    inputBgColor: darkBaseColor.gray400,
    inputBdColor: darkBaseColor.gray300,
    placeholderTextColor: darkBaseColor.white,
    switchEnableBgColor: darkBaseColor.primary0,
    switchUnableBgColor: darkBaseColor.gray10,
    switchEnableHandleColor: darkBaseColor.white,
    switchUnableHandleColor: darkBaseColor.gray500,
    activeRBgColor: darkBaseColor.primary0,
    RadioBdColor: darkBaseColor.gray60,
    checkboxBgColor: darkBaseColor.gray60,
    ...darkBaseColor,
  },

  card: {
    bgColor: darkBaseColor.gray400,
    bottomBdColor: darkBaseColor.gray200,
    keyBoardBgColor: darkBaseColor.gray300,
    keyBoardKeyBgColor: darkBaseColor.gray400,
    ...darkBaseColor,
  },

  list: {
    ...darkBaseColor,
  },

  modal: {
    modalBgColor: darkBaseColor.gray400,
    ...darkBaseColor,
  },

  actionSheet: {
    bgColor: darkBaseColor.gray400,
    ...darkBaseColor,
  },

  loading: {
    ...darkBaseColor,
  },

  icon: {
    text: darkBaseColor.white,
    footerIconBg: darkBaseColor.gray10,
    error: darkBaseColor.primary0,
    ...darkBaseColor,
  },

  table: {
    ...darkBaseColor,
  },

  tab: {
    ...darkBaseColor,
    activeBgColor: darkBaseColor.gray500,
    unActiveBgColor: darkBaseColor.white,
    activeBdColor: darkBaseColor.white,
    unActiveBdColor: 'transparent',
  },

  toast: {
    bgColor: darkBaseColor.gray350,
    ...darkBaseColor,
  },
}
