import React from "react";
import { Text, Button } from "react-native";
import { useTranslation } from "react-i18next";

export default function Main() {
  const { t } = useTranslation("common");

  return (
    <>
      <Text>{t("home")}</Text>
    </>
  );
}
