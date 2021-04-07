import React from "react";
import { Text } from "react-native";
import { useTranslation } from "react-i18next";

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
