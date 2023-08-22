import React, { useState, useEffect, useContext } from "react";
import { View } from "react-native";
import { ThemeContext } from "styled-components";

import { PickerCom } from "./Picker";
import { InputCom } from "./Input";
import { Row, Col } from "../../grid";

export const NrcInputCom = ({
  dictionaryData,
  langCode,
  nrcData,
  currentLanguage,
  ...props
}: any) => {
  const { onHandleChange, selectedValue } = props;
  const themeContext = useContext(ThemeContext);

  const [state, setState]: any = useState({
    nrc_part1: "",
    nrc_part2: "",
    nrc_part3: "",
    nrc_part4: "",
  });

  useEffect(() => {
    if (selectedValue) {
      let tmp = selectedValue?.split("-");
      if (tmp?.length > 0) {
        setState({
          ...state,
          nrc_part1: parseInt(tmp[0]),
          nrc_part2: tmp[1],
          nrc_part3: tmp[2],
          nrc_part4: tmp[3],
        });
      }
    }
  }, [selectedValue]);

  useEffect(() => {
    if (
      state.nrc_part1 !== "" &&
      state.nrc_part2 !== "" &&
      state.nrc_part3 !== "" &&
      state.nrc_part4 !== ""
    ) {
      let final_nrc = `${state.nrc_part1}-${state.nrc_part2}-${state.nrc_part3}-${state.nrc_part4}`;
      onHandleChange(final_nrc);
    } else {
      onHandleChange("");
    }
  }, [state.nrc_part1, state.nrc_part2, state.nrc_part3, state.nrc_part4]);

  const handleValueChange = (key: any, val: any) => {
    setState({
      ...state,
      [key]: val,
    });
  };

  let districtData =
    state.nrc_part1 > 0 ? nrcData?.township?.[state.nrc_part1] : [];

  return (
    <View style={{ flex: 1 }}>
      <Row style={{ paddingBottom: 5, marginBottom: 5 }}>
        <Col style={{ flex: 0.6, marginLeft: 0 }}>
          <PickerCom
            placeholder="NRC Part1"
            itemData={
              nrcData?.state?.length > 0
                ? [
                    {
                      value: "Please select item",
                      value_mm: "အောက်ပါ တစ်ခု ရွေးပါ",
                    },
                    ...nrcData?.state,
                  ]
                : [
                    {
                      value: "Please select item",
                      value_mm: "အောက်ပါ တစ်ခု ရွေးပါ",
                    },
                  ]
            }
            value={state.nrc_part1}
            onChange={(e: any, i: number) =>
              handleValueChange("nrc_part1", i === 0 ? null : e)
            }
            keyType="value"
            valueType={currentLanguage === "my" ? "value_mm" : "value"}
            defaultModalStyle={{ borderRadius: 5 }}
            isShowErrMsg={false}
            {...props}
          />
        </Col>
        <Col style={{ flex: 1 }}>
          <PickerCom
            placeholder="NRC Part2"
            itemData={
              districtData?.length > 0
                ? [
                    {
                      value: "Please select item",
                      value_mm: "အောက်ပါ တစ်ခု ရွေးပါ",
                    },
                    ...districtData,
                  ]
                : [
                    {
                      value: "Please select item",
                      value_mm: "အောက်ပါ တစ်ခု ရွေးပါ",
                    },
                  ]
            }
            value={state.nrc_part2}
            onChange={(e: any, i: number) =>
              handleValueChange("nrc_part2", i === 0 ? null : e)
            }
            keyType="value"
            valueType={currentLanguage === "my" ? "value_mm" : "value"}
            defaultModalStyle={{ borderRadius: 5 }}
            isShowErrMsg={false}
            {...props}
          />
        </Col>
        <Col style={{ flex: 0.7, marginRight: 0 }}>
          <PickerCom
            placeholder="NRC Part3"
            itemData={
              nrcData?.type?.length > 0
                ? [
                    {
                      value: "Please select item",
                      value_mm: "အောက်ပါ တစ်ခု ရွေးပါ",
                    },
                    ...nrcData?.type,
                  ]
                : [
                    {
                      value: "Please select item",
                      value_mm: "အောက်ပါ တစ်ခု ရွေးပါ",
                    },
                  ]
            }
            value={state.nrc_part3}
            onChange={(e: any, i: number) =>
              handleValueChange("nrc_part3", i === 0 ? null : e)
            }
            keyType="value"
            valueType={currentLanguage === "my" ? "value_mm" : "value"}
            defaultModalStyle={{ borderRadius: 5 }}
            isShowErrMsg={false}
            {...props}
          />
        </Col>
      </Row>
      <InputCom
        placeholder="NRC Number"
        placeholderTextColor="#C1C1C1"
        value={state.nrc_part4}
        onChangeText={(e: any) => handleValueChange("nrc_part4", e)}
        style={{ width: "100%" }}
        keyboardType="numeric"
        {...props}
      />
    </View>
  );
};

NrcInputCom.defaultProps = {
  nrccitizen_data: [],
  nrcstate_data: [],
};
