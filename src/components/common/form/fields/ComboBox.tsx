import React, { useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemeContext } from "styled-components";

import { TextCom } from "../../typo";
import { CardCom } from "../../card";
import { Row, Col } from "../../grid";
import { FieldContainer } from "./FieldContainer";

export const ComboBoxCom: React.FC<FormComponents.ComboBoxCom> = ({
  children,
  comboBoxContainerProps,
  comboBoxWrapProps,
  comboBoxItemProps,
  comboBoxTextProps,
  renderItem,
  isMultiple = false,
  valueName = "value",
  keyName = "key",
  cardStyle,
  ...props
}) => {
  const [selectedIds, setSelectedIds]: any = useState(
    Array.isArray(props?.value) ? props?.value : []
  );
  const themeContext = useContext(ThemeContext);

  const handleChange = (item: any, i: number) => {
    if (isMultiple) {
      const updatedIds = selectedIds.includes(item?.[keyName])
        ? selectedIds.filter((x: any) => x !== item?.[keyName])
        : [...selectedIds, item?.[keyName]];

      setSelectedIds(updatedIds);
      props?.onChange(updatedIds);
    } else {
      const newValue = item?.[keyName];
      const updatedValue = props?.value === newValue ? null : newValue;
      props?.onChange(updatedValue, i);
    }
  };

  const handleActiveColor = (item?: any) => {
    const isActive = isMultiple
      ? selectedIds.includes(item?.[keyName])
      : props?.value === item?.[keyName];

    return isActive
      ? "primary0"
      : themeContext.color.mode === "dark"
      ? "gray350"
      : "white500";
  };

  return (
    <FieldContainer {...props}>
      {children ? (
        children(props)
      ) : (
        <Row
          style={{ marginTop: 0, marginBottom: 0 }}
          {...comboBoxContainerProps}
        >
          {props?.data?.length > 0 &&
            props?.data?.map((x: any, i: number) =>
              renderItem ? (
                renderItem(x, i)
              ) : (
                <Col
                  style={[
                    styles.amountCol,
                    { paddingRight: (i + 1) % 3 === 0 ? 0 : 10 },
                  ]}
                  key={i}
                  {...comboBoxWrapProps}
                >
                  <CardCom
                    bgColor={handleActiveColor(x)}
                    style={[
                      {
                        flex: 1,
                        borderWidth: 0,
                        borderRadius: 4,
                      },
                      cardStyle,
                    ]}
                    onPress={() => handleChange(x, i)}
                    {...comboBoxItemProps}
                  >
                    {x[valueName] && (
                      <TextCom
                        weight="lg"
                        textAlign="center"
                        color={
                          props?.value === x?.[keyName] ? "white10" : "text"
                        }
                        {...comboBoxTextProps}
                      >
                        {x?.[valueName]}
                      </TextCom>
                    )}
                  </CardCom>
                </Col>
              )
            )}
        </Row>
      )}
    </FieldContainer>
  );
};

const styles = StyleSheet.create({
  amountCol: {
    width: "33.3333333333%",
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    marginTop: 0,
    paddingBottom: 3,
    paddingTop: 8,
  },
});
