# YourTour — приложение на Next.js

Учебный проект по React/Next.js. Свёрстанный макет YourTour из первого задания  
переписан с использованием Next.js и Page Router. Основной акцент — на компонентную  
архитектуру и переиспользование компонентов.

## Демо
https://yourtour-react.vercel.app/

## Стек
- Next.js (Page Router)
- React
- SCSS (CSS Modules)
- JavaScript (ES6+)
- Webpack (встроен в Next.js)

## Архитектура
- **components/commons** — переиспользуемые компоненты, которые могут использоваться на разных страницах (Header, Footer, Button, Picture, Form).
- **components/pages** — компоненты, привязанные к конкретной странице. Каждая секция страницы вынесена в отдельный компонент (`Hero`, `Tours`, `CreateTour`, `Reviews`).
- **Стили** — CSS Modules (`*.module.scss`) для изоляции стилей на уровне компонентов.
- **Page Router** — маршрутизация на основе файловой системы Next.js.

## Функционал
- Перенос вёрстки YourTour на компонентную архитектуру Next.js
- Переиспользуемые UI-компоненты: Header, Footer, Button, Picture, Form
- Секции главной страницы как отдельные компоненты: Hero, Tours, CreateTour, Reviews
- Адаптивная вёрстка под три вьюпорта: 1920px, 1024px, 360px
- Метатеги через компонент `Head` из Next.js
- SCSS-модули для изоляции стилей
