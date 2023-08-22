import React, { forwardRef, useState, useEffect, useMemo } from "react";
import { FlatList } from "react-native";
import get from "lodash.get";

import { CollapseContainer } from "../container";
import { CollapseBody } from "../body";
import { CollapseHeader } from "../header";

const isNil = (element?: any) => element == null;

type AccordionListProps = {
  data?: any;
  list?: any;
  header?: any;
  body?: any;
  onToggle?: any;
  isDisabled?: any;
  keyExtractor?: any;
  expandedKey?: any;
  expandedIndex?: any;
  extraData?: any;
  ref?: any;
};
export const AccordionList: React.FC<AccordionListProps> = forwardRef(
  (
    {
      data,
      list = [],
      header = () => undefined,
      body = () => undefined,
      onToggle = () => undefined,
      isDisabled = () => undefined,
      keyExtractor,
      expandedKey,
      expandedIndex,
      extraData,
      ...restProps
    },
    ref
  ) => {
    // internal keyExtractor
    const _keyExtractor = useMemo(
      () => keyExtractor || ((item: any, index: any) => index),
      [keyExtractor]
    );

    // merged list
    const mergeList = useMemo(() => data || list, [data, list]);

    // expanded key extracted from expandedKey or expandedIndex (priority expandedKey if defined)
    const _expandedKey = useMemo(() => {
      const selectedItem = get(mergeList, expandedIndex);
      const expandedKeyViaIndex = selectedItem
        ? _keyExtractor(selectedItem, expandedIndex)
        : undefined;

      return isNil(expandedKey)
        ? isNil(expandedKeyViaIndex)
          ? undefined
          : expandedKeyViaIndex
        : expandedKey;
    }, [mergeList, expandedKey, expandedIndex, _keyExtractor]);

    // key of the expanded element
    const [selected, setSelected] = useState(_expandedKey);

    // expand element if changed
    useEffect(() => {
      setSelected(_expandedKey);
    }, [_expandedKey]);

    return (
      <FlatList
        ref={ref}
        data={mergeList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          const isElementExpanded = _keyExtractor(item, index) === selected;
          return (
            <CollapseContainer
              isExpanded={isElementExpanded}
              onToggle={(isExpanded?: any) => {
                const newlySelected = _keyExtractor(item, index);
                onToggle(newlySelected, index, isExpanded);
                setSelected(
                  isExpanded && !isNil(newlySelected)
                    ? newlySelected
                    : undefined
                );
              }}
              disabled={isDisabled(item, index)}
            >
              <CollapseHeader>
                {header(item, index, isElementExpanded)}
              </CollapseHeader>
              <CollapseBody>
                {body(item, index, isElementExpanded)}
              </CollapseBody>
            </CollapseContainer>
          );
        }}
        // Do not provide the internal keyExtractor to keep the default warning of react native FlatList
        keyExtractor={keyExtractor}
        {...restProps}
      />
    );
  }
);
