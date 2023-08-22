import { ReactNode } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { fontWeight, fontSize } from '@theme/attributes'

declare global {
  namespace CommonComponents {
    type FontWeight = keyof typeof fontWeight

    type FontSize = keyof typeof fontSize

    //* start button types
    type ButtonCom = {
      text?: string
      color?: any
      btnLeftRender?: React.ReactNode
      btnRightRender?: React.ReactNode
      children?: React.ReactNode
      btnLoadingRender?: React.ReactNode
      btnContentRender?: React.ReactNode
      appearance?: string
      bgColor?: any
      weight?: any
      onPress?: any
      disabled?: boolean
      style?: any
      link?: any
      size?: any
      textStyle?: any
      activeOpacity?: any
      isLoading?: boolean
      gradientProps?: any
      indicatorProps?: any
      disabledBgColor?: any
      disabledBorderColor?: any
      borderColor?: any
      activityIndicatorColor?: any
      btnHeight?: number
      numberOfLines?: number
      ellipsizeMode?: string
      isPressable?: boolean
      bdWidth?: number
      bdRadius?: number
    }
    //* end button types

    type CardCom = {
      isShadow?: boolean
      pressable?: boolean
      children?: React.ReactNode
      onPress?: () => void
      bgColor?: any
      bdColor?: any
      style?: any
      onLayout?: any
      disabled?: boolean | undefined
      delayPressIn?: any
      delayPressOut?: any
      activeOpacity?: any
      onPressIn?: any
    }

    //* start grid types
    type RowCom = {
      children?: React.ReactNode
      style?: any
    }
    type ColCom = {
      style?: any
      children?: React.ReactNode
    }
    //* end grid types

    type IconCom = {
      type?: string
      name?: string
      color?: string
      iconSize?: any
      style?: any
      onPress?: () => void
    }

    //* start image types
    type ImageCom = {
      thumbnailSource?: any
      source?: any
      style?: any
      resizeMode?: any
      isCalHeight?: any
    }
    //* end image types

    //* start layout types
    type ContainerCom = {
      vertical_offset?: any
      loadingBgColor?: string
      loadingProps?: any
      isCommingSoon?: boolean
      commingSoonProps?: any
      netInfoProps?: any
      isFooter?: any
      isChat?: boolean
      isStatusBarHide?: boolean
      isScrollToTop?: boolean
      chatIconBottom?: any
      scrollToTopBottom?: any
      navigation?: any
      isLoading?: boolean
      refreshing?: any
      onRefresh?: any
      full?: any
      isScroll?: boolean
      headerRender?: React.ReactNode
      headerChild?: React.ReactNode
      isHeader?: boolean
      children?: React.ReactNode
      SH?: any
      edges?: any
      back?: any
      primary?: any
      headerStyle?: any
      text?: string | undefined
      bottomSafeStyle?: any
      headerBgColor?: any
      menu?: any
      safeAreaBgColor?: any
      handleScroll?: any
      rightComponent?: any
      borderColor?: any
      handleCustomBack?: any
      customBack?: any
      bg?: any
      scrollRef?: any
      statusBarStyle?: any
      containerBgColor?: any
      statusBgColor?: any
      statusBarProps?: any
      isTranslucent?: boolean
      headerTextProps?: any
    }

    type DrawerCom = {
      navigation?: any
      dictionary_data?: any
      renderLogout?: any
      renderLogoutModal?: any
      routeData?: any
      logoutbtntext?: any
      logout_desc?: any
      langCode?: string
      getProfile_data?: any
      onHandleLogOut?: any
      bottomSafeStyle?: any
    }

    type FooterCom = {
      state?: any
      descriptors?: any
      navigation?: any
      getCart_data?: any
    }

    type FooterFixCom = {
      edges?: any
      bgColor?: any
      children?: React.ReactNode
      style?: any
    }

    type HeaderCom = {
      children?: React.ReactNode
      headerRender?: any
      headerLeftRender?: any
      headerCenterRender?: any
      headerRightRender?: any
      navigation?: any
      text?: any
      back?: any
      menu?: any
      isCenter?: any
      handleCustomBack?: any
      isCustomBack?: any
      headerStyle?: any
      bgColor?: any
      style?: any
      isHeader?: boolean
      headerChild?: any
      headerTextProps?: any
      backIconProps?: any
    }

    type LoaderCom = {
      type?: any
      loadingBgColor?: any
      isLoading?: boolean | undefined
    }
    //* end layout types

    type FlatListCom = {
      refreshing?: any
      onRefresh?: any
      emptytext?: any
      isLoading?: any
      isScrollToTop?: boolean
      dictionary_data?: any
      scrollToTopBottom?: any
      langStore?: any
      data?: any
      numColumns?: number | undefined
      stickyHeaderIndices?: any
      showsVerticalScrollIndicator?: boolean | undefined
      ListHeaderComponent?: any
      renderItem?: any
      keyExtractor?: any
      onEndReached?: any
      columnWrapperStyle?: any
      ListFooterComponentStyle?: any
      onScroll?: any
      ListEmptyComponent?: any
      flatRef?: any
      style?: StyleProp<ViewStyle>
    }

    //* start modal types
    type ModalCom = {
      children?: React.ReactNode
      isTimer?: boolean
      isAlway?: boolean
      isVisible?: any
      setIsVisible?: any
      style?: any
      modalContainerProps?: any
      modalContentProps?: any
      statusBgColor?: any
      statusBarStyle?: any
      handleClose?: any
    }

    type DialogCom = {
      renderChild: React.ReactNode
      renderModalHeader: React.ReactNode
      renderModalBody: React.ReactNode
      renderModalFooter: React.ReactNode
      handleRightBtn: React.ReactNode
      handleClose: any
      title: string
      titleColor?: any
      description: string
      subDescription: string
      handleLeftBtn: any
      leftBtnProps: any
      rightBtnProps: any
      isAlway: boolean
      isModalHeader: boolean
      isModalBody: boolean
      isModalFooter: boolean
      dialogContainerProps?: any
      dialogBodyContainerProps?: any
      dialogHeaderContainerProps?: any
      dialogFooterContainerProps?: any
    }

    //* end modal types

    //* start slider types
    //* end slider types

    type TextCom = {
      style?: any
      weight?: FontWeight
      children?: React.ReactNode
      size?: FontSize
      numberOfLines?: number
      color?: any
      textAlign?: 'left' | 'right' | 'center' | 'justify'
      lang?: any
      link?: any
      disabled?: any
      onPress?: () => void
      ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip'
    }

    //* start WebView types
    //* end WebView types

    type WebViewCom = {
      webViewRef?: any
      source?: any
      onNavigationStateChange?: any
      onLoad?: any
      onMessage?: any
      scalesPageToFit?: any
      useWebKit?: any
      sharedCookiesEnabled?: any
      javaScriptEnabled?: boolean
      domStorageEnabled?: boolean
    }

    type ActionSheetCom = {
      actionConfig: any
      handleActionPress: any
      children: any
    }

    type SwiperSliderCom = {
      data?: any
      children?: any
      swiperProps?: any
      renderItemCom?: any
      itemStyles?: any
      itemImgStyles?: any
      height?: any
      dataKey?: any
      imgProps?: any
      containerStyle?: any
      disabled?: any
      onHandleItemPress?: any
      isLoading?: any
      paginationStyle?: any
    }

    type SliderCom = {
      sliderRef?: any
    }

    type CarouselCom = {
      carouselRef?: any
    }

    type SkeletonCom = {
      width?: number
      height?: number
      borderRadius?: number
      marginBottom?: number
      animationType?: string | 'pulse' | 'fade'
      animationDuration?: number
      animationDelay?: number
      style?: any
    }
  }

  namespace CustomComponents {
    type BottomModal = {
      textTitle?: any
      onPress?: any
      onPressCancel?: any
      onhandleClose?: any
      nextVersion?: any
      onSubmit?: any
    }

    type ShowMessage = {
      isShowimage?: any
      imgSource?: any
      onPress?: any
      errMessage?: any
      successText?: any
      title?: any
    }

    type BankModal = {
      handleAddBankAcc?: any
      handleClose?: any
      currentBanks?: any
      navigation?: any
    }

    type BankTransferModal = {
      title?: any
      onPress?: any
      onSubmit?: any
      isLoading?: any
    }

    // Place
    type Place = {
      name: string
      sid: string
      // code: string
      // value_mm: string
    }

    type PlaceModal = {
      title?: string
      handleChange: (i: object) => Place
      places: Place[]
    }
  }
  namespace FormComponents {
    type AppointmentPickerCom = {
      value?: any
      onChange?: any
      activeDays?: any
      maxDays?: any
      placeholder?: any
      holidays?: any
      SVGL?: any
    }

    type ButtomSheetInputCom = {
      placeholder?: string
      itemData?: any
      onHandleChange?: any
      value?: any
    }

    type CheckBoxCom = {
      value?: any
      onValueChange?: any
      children?: React.ReactNode
      tickStyle?: any
      handleBlur?: () => void
      error?: any
      type?: string
    }

    type CustomDatePickerCom = {
      dictionary_data?: any
      langCode?: any
      sample?: any
      onHandleChange?: any
      selectedValue?: any
      onBlur?: any
    }

    type CustomPickerCom = {
      itemData?: any
      value?: any
      onChange?: any
      style?: any
      mode?: any
      placeholder?: any
      keyType?: any
      valueType?: any
      iconleftname?: string
      type?: string
      SVGL?: any
      iconrightname?: string
      SVGR?: any
      label?: any
      inputBgColor?: any
      isCapitalize?: any
    }

    type DateTimePickerCom = {
      opendatePicker?: any
      show?: any
      type?: any
      iconrightname?: any
      SVGL?: any
      value?: any
      color?: any
      iconColor?: any
      placeholder?: string
      onChange?: any
      setShow?: any
      onBlur?: any
    }

    type FieldWrapper = {
      value?: any
      label?: any
      required?: any
      children?: React.ReactNode
      materialLabel?: any
      isFocus?: any
      desc?: string
    }

    type FileUploadCom = {
      placeholder?: any
      onHandleChange?: any
    }

    type ImagePickerCom = {
      placeholder?: any
      onHandleChange?: any
      launchType?: any
      value?: any
      square?: any
      isIcon?: any
      multiple?: any
    }

    type FilePickerCom = {
      renderView?: any
      documentPickerOptionsProps?: any
      handleChange?: any
      value?: any
      navigation?: any
      handleBlur?: () => void
      error?: any
      actionSheetProps?: any
    }

    type InputCom = {
      inputRef?: any
      secure?: any
      seedetect?: any
      materialLabel?: any
      iconLeftName?: string
      iconRightName?: string
      type?: string
      leftRender?: any
      rightRender?: any
      placeholderTextColor?: any
      placeholder?: string
      value?: any
      onChangeText?: any
      style?: any
      keyboardType?: any
      returnKeyType?: any
      onSubmitEditing?: any
      onBlur?: any
      seedetect_custom?: boolean
      onFocus?: any
      multiline?: any
      scrollEnabled?: any
      numberOfLines?: any
      label?: string | undefined
      inputBgColor?: any
      inputBdColor?: any
      autoFocus?: boolean
      error?: any
      handleBlur?: () => void
      iconLeftColor?: any
      inputStyle?: any
      maxLength?: any
      secureTextEntry?: any
      editable?: any
      clearable?: boolean
      renderClearableIcon?: ReactNode
      onReset?: () => void
    }

    type NrcInputCom = {
      dictionary_data?: any
      langCode?: string
      onHandleChange?: any
      selectedValue?: any
      nrccitizen_data?: any
      nrcstate_data?: any
      onBlur?: any
      handleBlur?: () => void
      error?: any
    }

    type PickerCom = {
      itemData?: any
      value?: any
      onChange?: any
      mode?: string
      placeholder?: any
      keyType?: any
      valueType?: any
      renderTitle?: any
      customRender?: any
      modalProps?: any
      customModalRender?: any
      handleIsModalVisible?: any
      isDropDown?: boolean
      handleBlur?: () => void
      error?: any
      pickerContainerProps?: any
      pickerProps?: any
      renderPickerItem?: any
      iconLeftName?: any
      leftRender?: any
      iconRightName?: any
      rightRender?: any
      customPickerItemProps?: any
      type?: string
    }

    type RadioCom = {
      value?: any
      onValueChange?: any
      leftRender?: any
      rightRender?: any
      type?: any
      style?: any
      handleBlur?: () => void
      error?: any
      disabled?: any
    }

    type SwitchCom = {
      value?: any
      onValueChange?: any
      switchType?: any
      toogleProps?: any
      handleProps?: any
      handleBlur?: () => void
      error?: any
    }

    //* validate form container types

    type VButtomSheetInput = {}

    type VCheckBox = {
      name?: any
      rules?: any
      defaultValue?: any
    }

    type VDatePicker = {
      max?: any
      noCard?: any
      label?: any
      required?: any
      placeholder?: any
      sample?: any
      materialLabel?: any
      dictionaryData?: any
      langCode?: any
    }

    type VPicker = {
      name?: any
      rules?: any
      defaultValue?: any
      label?: any
      placeholder?: any
      itemData?: any
      keyType?: any
      valueType?: any
      onChange?: any
      materialLabel?: any
      required?: any
      isCapitalize?: any
      modalProps?: any
      pickerProps?: any
      renderPickerItem?: any
    }

    type VDateTimePicker = {
      name?: any
      label?: string
      placeholder?: string
      maximumDate?: any
      minimumDate?: any
      rules?: any
      defaultValue?: any
    }

    type VFieldContainer = {
      fieldContainerProps?: any
      label?: any
      required?: any
      children?: React.ReactNode
      materialLabel?: any
      isFocus?: any
      radioLabelPos?: any
      desc?: string
      SVGL?: any
      error?: any
      value?: any
      isShowErrMsg?: boolean
      style?: any
    }

    type VFileUpload = {}

    type FormContainerCom = {
      onSubmit?: any
      children?: any
      FooterForm?: any
      AvoidType?: string
      initialValues?: any
      validationSchema?: any
    }

    type VImagePicker = {
      multiple?: any
    }

    type VNrcInput = {
      name?: any
      rules?: any
      defaultValue?: any
      max?: any
      label?: any
      nrcData?: any
      currentLanguage?: any
      required?: boolean | undefined
      modalProps?: any
    }

    type VQrInput = {}

    type VRadio = {
      name?: any
      rules?: any
      defaultValue?: any
      radioArr?: any
      type?: string
    }

    type VSwitch = {
      name?: any
      rules?: any
      defaultValue?: any
    }

    type VInput = {
      name?: any
      rules?: any
      defaultValue?: any
      placeholder?: string
      secure?: any
      required?: any
      label?: any
      SVGL?: any
      materialLabel?: any
      returnKeyType?: any
      keyboardType?: any
      multiline?: any
      scrollEnabled?: any
      numberOfLines?: any
      style?: any
      placeholderTextColor?: any
      seedetect?: any
      onSubmitEditing?: any
      rightRender?: any
      clearable?: boolean
      renderClearableIcon?: ReactNode
      leftRender?: ReactNode
      onEndEditing?: any
      maskPattern?: any
      maskType?: any
      maskOptions?: any
      autoCapitalize?: any
    }

    type KeyBoardCom = {
      keyBoardContainerProps?: any
      keyContainerProps?: any
      handleDone?: any
      pinLength?: number
      isKeyboardHeader?: boolean
      keyboardHeaderRender?: any
      title?: string
      description?: string
    }

    type DateTimerPickerCom = {
      value?: any
      placeholder?: any
      opendatePicker?: any
      show?: boolean
      leftRender?: React.ReactNode
      rightRender?: React.ReactNode
      onChange?: any
      setShow?: any
      handleBlur?: () => void
      error?: any
      label?: string
    }

    type ComboBoxCom = {
      children?: any
      value?: any
      handleBlur?: any
      onChange?: any
      error?: any
      keyName?: any
      data?: any
      comboBoxContainerProps?: any
      comboBoxWrapProps?: any
      comboBoxItemProps?: any
      comboBoxTextProps?: any
      renderItem?: any
      isMultiple?: boolean
      valueName?: string | undefined
      cardStyle?: any
    }

    type VComboBox = {
      name?: any
      keyName?: string
      valueName?: string
      rules?: any
      defaultValue?: string
      label?: string
      data?: any[]
      moneyFormat?: any
      isShowErrMsg?: boolean
    }
  }
}
