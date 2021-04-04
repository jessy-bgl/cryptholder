import React from "react";
import { Text } from "react-native";
import { useTranslation } from "react-i18next";

export default function Settings() {
  const { t } = useTranslation("common");

  return (
    <>
      <Text>{t("settings")}</Text>
    </>
  );
}
