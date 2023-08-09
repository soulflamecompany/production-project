import { lazy } from 'react';

export const MainPageAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore
        // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
        setTimeout(() => resolve(import('./MainPage')), 1500);
    }),
);

// В РЕАЛЬНЫХ ПРОЕКТАХ:  export const MainPageAsync = lazy(()=>import('./MainPage.tsx'))
