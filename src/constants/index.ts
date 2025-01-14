export const THEME_CONFIG = {
  components: {
    Button: {
      colorPrimary: 'rgb(0, 129, 87)',
      colorPrimaryBorder: 'rgb(0, 233, 158)',
      colorPrimaryActive: 'rgb(0, 91, 61)',
      colorPrimaryHover: 'rgb(3, 175, 119)',
    },
    Drawer: {
      colorBgElevated: 'rgb(0, 129, 87)',
      colorIcon: 'rgb(255, 255, 255)',
      colorIconHover: 'rgba(225, 225, 225, 0.88)',
    },
    Menu: {
      itemActiveBg: '#9B3934',
      itemSelectedBg: '#D65049',
      itemSelectedColor: 'rgb(253, 253, 253)',
      itemBg: '#9B3934',
      itemColor: 'rgba(255, 255, 255, 0.88)',
      itemHoverColor: 'rgba(188, 188, 188, 0.88)',
      groupTitleColor: 'rgba(255, 255, 255, 0.8)',
    },
    Steps: {
      colorPrimary: '#9B3934',
      colorPrimaryBorder: 'rgb(2, 182, 123)',
      controlItemBgActive: 'rgb(52, 230, 170)',
    },
  },
}

export const FORM_ITEM_LAYOUT = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
    className: 'flex',
  },
}

export const FORM_ITEM_LAYOUT_MEDIUM = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
    lg: { span: 12 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
    lg: { span: 12 },
    className: 'flex',
  },
}

export const BLOCK_FORM_ITEM_LAYOUT = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
}

export const FORM_ITEM_LAYOUT_WITHOUT_LABEL = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 16, offset: 8 },
  },
}

export const USER_LOCAL_STORAGE_KEY = 'sid__secure__log_token_retursi'

export const USER_LOCAL_STORAGE_KEY_EXTERNAL = 'sid__secure__log_token_external'
