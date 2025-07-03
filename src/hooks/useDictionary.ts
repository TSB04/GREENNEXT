"use client";
import { Dictionary, getDictionary } from "@/app/[locale]/dictionaries";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const allowedLocales = ["en", "fr"] as const;
type AllowedLocale = (typeof allowedLocales)[number];

export function useDictionary(fallbackLocale: AllowedLocale = "en") {
  const params = useParams();
  const rawLocale = params?.locale;
  const [dict, setDict] = useState<Dictionary | null>(null);

  useEffect(() => {
    const isAllowedLocale = (l: string): l is AllowedLocale =>
      allowedLocales.includes(l as AllowedLocale);

    const loadDictionary = async (locale: string) => {
      const safeLocale: AllowedLocale = isAllowedLocale(locale)
        ? locale
        : fallbackLocale;
      const data = await getDictionary(safeLocale);
      setDict(data);
    };

    if (typeof rawLocale === "string") {
      loadDictionary(rawLocale);
    } else {
      loadDictionary(fallbackLocale);
    }
  }, [rawLocale, fallbackLocale]);

  return {
    dict,
    locale: (rawLocale as AllowedLocale) ?? fallbackLocale,
    isLoading: !dict,
  };
}
