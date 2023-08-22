import React, { useState } from "react";
import Accordion from "react-native-collapsible/Accordion";

export const AccordionCom = ({ initialActiveSections = [], ...props }: any) => {
  const [activeSections, setActiveSections] = useState(initialActiveSections);

  const handleUpdateSections = (activeSections: any) => {
    setActiveSections(activeSections);
  };

  return (
    <Accordion
      activeSections={activeSections}
      onChange={handleUpdateSections}
      {...props}
    />
  );
};
