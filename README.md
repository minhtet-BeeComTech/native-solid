# Installation
```
npm i native-solid  (or)  yarn add native-solid
```

# Typography
`
import { TextCom } from 'native-solid'
`
| attribute props | Description                                 |
|-----------------|---------------------------------------------|
| color           | Use the typo color in the local theme file  |
| size            | Use the typo size in the local theme file   |
| weight          | Use the typo weight in the local theme file |
| style           | you can use custom styles                   |

# Button
`
import { ButtonCom } from 'native-solid'
`

| attribute props | Description                                                      |
|-----------------|------------------------------------------------------------------|
| bgColor         | Use the button color in the local theme file                     |
| borderColor     | Use the button color in the local theme file                     |
| text            | text string for button                                           |
| color           | Use the typo color in the local theme file for button text color |
| type            | icon, full, outline, clear                                       |
| img             | use image source dir or url for icon type button                 |
| style           | you can use custom styles                                        |

# Card
`
import { CardCom } from 'native-solid'
`
| attribute props | Description                                      |
|-----------------|--------------------------------------------------|
| bgcolor         | Use the background color in the local theme file |
| children        | component                                        |
| style           | you can use custom styles                        |

# Grid
`
import { Row, Col } from 'native-solid'
`
| attribute props | Description               |
|-----------------|---------------------------|
| children        | component                 |
| style           | you can use custom styles |

# List
`
import { FlatListCom } from 'native-solid'
`
| attribute props | Description                                            |
|-----------------|--------------------------------------------------------|
| refreshing      | There are values ​​of true and false. The default is false |
| onRefresh       | method for refreshing                                  |
| emptytext       | To display when no data is available                   |
| isLoading       | There are values ​​of true and false. The default is false |
| style           | you can use custom styles                              |

# Form
`
import { CheckBoxCom, DateTimePickerCom, FileUploadCom, ImagePickerCom, InputCom, PickerCom, RadioCom } from 'native-solid'
`

# Validate Form
`
import { VCheckBox, VDateTimePicker, VFileUpload, VImagePicker, VInput, VPicker, VRadio } from 'native-solid'
`

# Layout
`
import { ContainerCom, FooterCom, HeaderCom, DrawerCom } from 'native-solid'
`