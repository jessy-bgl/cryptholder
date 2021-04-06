import React from "react";
import { Text } from "react-native";
import { useTranslation } from "react-i18next";
import { boolean } from "mobx-state-tree/dist/internal";

type MainProps = {
  loadingData: boolean;
};

const Main = ({ loadingData }: MainProps) => {
  const { t } = useTranslation("common");

  return (
    <>
      <Text>{t("home")}</Text>
    </>
  );
};

export default Main;
