import { lazy } from "react";

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
      setTimeout(() => resolve(import("./AboutPage")), 1500);
    })
);

// В РЕАЛЬНЫХ ПРОЕКТАХ:  export const AboutPageAsync = lazy(()=>import('./AboutPage.tsx'))
