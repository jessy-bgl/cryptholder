import React from "react";
import { Text } from "react-native";
import { useTranslation } from "react-i18next";

export default function Alerts() {
  const { t } = useTranslation("common");

  return (
    <>
      <Text>{t("alerts")}</Text>
    </>
  );
}
