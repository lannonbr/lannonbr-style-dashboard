# lannonbr style dashboard

A dashboard of viewing stats on the CSS of my site.

Using [cssstats](https://github.com/cssstats/cssstats) to collect the data and likely going to be basing some of the dashboard design on their dashboard. As I am storing some of the data I get from cssstats, this data will be able to be viewed as a timeseries chart.

Built using [Toast](https://github.com/ChristopherBiscardi/toast/).

## Setup

1. Clone and install dependencies. This will also create a `public/web_modules` folder which will include the needed npm modules when shipped up to the cloud.
1. Run `yarn build` / `npm run build` to build the site.
1. Host on a web server. `npx http-server public` will host it on your local machine at `localhost:8080`.
