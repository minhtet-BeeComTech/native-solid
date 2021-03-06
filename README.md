# Native Solid

## Getting Start
```
npm i native-solid  (or)  yarn add native-solid
```

## Typography

```js
import { TextCom } from 'native-solid'
```

| attribute props | Description                                 |
|-----------------|---------------------------------------------|
| color           | Use the typo color in the local theme file  |
| size            | Use the typo size in the local theme file   |
| weight          | Use the typo weight in the local theme file |
| style           | you can use custom styles                   |

## Button

```js
import { ButtonCom } from 'native-solid'
```

| attribute props | Description                                                      |
|-----------------|------------------------------------------------------------------|
| bgColor         | Use the button color in the local theme file                     |
| borderColor     | Use the button color in the local theme file                     |
| text            | text string for button                                           |
| color           | Use the typo color in the local theme file for button text color |
| type            | icon, full, outline, clear                                       |
| img             | use image source dir or url for icon type button                 |
| style           | you can use custom styles                                        |

## Card

```js
import { CardCom } from 'native-solid'
```

| attribute props | Description                                      |
|-----------------|--------------------------------------------------|
| bgcolor         | Use the background color in the local theme file |
| children        | component                                        |
| style           | you can use custom styles                        |

## Grid
```js
import { Row, Col } from 'native-solid'
```

| attribute props | Description               |
|-----------------|---------------------------|
| children        | component                 |
| style           | you can use custom styles |

## List
```js
import { FlatListCom } from 'native-solid'
```

| attribute props | Description                                            |
|-----------------|--------------------------------------------------------|
| refreshing      | There are values ​​of true and false. The default is false |
| onRefresh       | method for refreshing                                  |
| emptytext       | To display when no data is available                   |
| isLoading       | There are values ​​of true and false. The default is false |
| style           | you can use custom styles                              |

## Form

```js
import { CheckBoxCom, DateTimePickerCom, FileUploadCom, ImagePickerCom, InputCom, PickerCom, RadioCom } from 'native-solid'
```

| attribute props | Description                                            |
|-----------------|--------------------------------------------------------|
| refreshing      | There are values ​​of true and false. The default is false |
| onRefresh       | method for refreshing                                  |
| emptytext       | To display when no data is available                   |
| isLoading       | There are values ​​of true and false. The default is false |
| style           | you can use custom styles                              |

## Validate Form

```js
import { VCheckBox, VDateTimePicker, VFileUpload, VImagePicker, VInput, VPicker, VRadio } from 'native-solid'
```

| attribute props | Description                                            |
|-----------------|--------------------------------------------------------|
| refreshing      | There are values ​​of true and false. The default is false |
| onRefresh       | method for refreshing                                  |
| emptytext       | To display when no data is available                   |
| isLoading       | There are values ​​of true and false. The default is false |
| style           | you can use custom styles                              |

## Layout

```js
import { ContainerCom, FooterCom, HeaderCom, DrawerCom } from 'native-solid'
```

| attribute props | Description                                            |
|-----------------|--------------------------------------------------------|
| refreshing      | There are values ​​of true and false. The default is false |
| onRefresh       | method for refreshing                                  |
| emptytext       | To display when no data is available                   |
| isLoading       | There are values ​​of true and false. The default is false |
| style           | you can use custom styles                              |