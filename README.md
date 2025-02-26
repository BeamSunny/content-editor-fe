# Template NextJS Frontend

## Table of contents
1. [Folder Structure](#folder-structure)
2. [Getting Started](#getting-started)
3. [Resource](#resource)

## Folder Structure
- `src`
  - `components`
      - `base` is base component in this project.
      - `pages` is special component in page.
      - `shared` is shared component between page.
  - `configs` The configs folder is used to organize libraly and some constants.
  - `fonts` is the characters used in project.
  - `hooks` is function hook reusable.
  - `i18n` is language for render in tsx.
  - `images` is all images in folder.
  - `layouts` is layout of website.
  - `pages` is routes and pages.
      - `_app.tsx` is provider in project.
  - `queries` is graphql scheama.
  - `services` is another servince without graphql.
  - `states` is store of redux. Have many slice of redux.
  - `styles` 
      - `extend.scss` is reuse property css in class.
      - `global.scss` is global class in project.
      - `typography.scss` is typography control in this project.
      - `variables.tsx` is variables in project.
      - `custom<SONE_THING>.scss` is custom css class.
  - `utils`
      - `type.ts` is inteface reuse in project.
      - `others.ts` is reuse function.
  - `validations` is validation yup in page.
- `.env` is constant about env.
- `docker-compose.yml`

## Getting Started

### Prerequisites

- Run start project in local
```bash
docker compose up # For start
docker compose down # For stop
```

## Deploy to Production

- merge branch develop to main

## Resource

- [Web Production](https://main.d3e22m94kkkc59.amplifyapp.com/en/)
- [CloudWatch](????)
- [S3 Keep log](??)
- [Postman](???????????)
- [Figma](????????????????????????????)

### Production

- Host Website in [AWS Amplify](https://ap-southeast-1.console.aws.amazon.com/amplify/home?region=ap-southeast-1#/d3e22m94kkkc59)
- Read in Amplify variable

### Development

- Host Website in localhost
- Read File .env