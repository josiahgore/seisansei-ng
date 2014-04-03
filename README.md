seisansei (生産性)
=========

A foray into the world of productivity apps.

## Installation

```
npm install
bower install
grunt serve
```

## Deployment

**Note:** In order to deploy to an S3 website it is necessary to fill in AWS API keys in *config/grunt-aws.json*.

All non-template files in *config/* are included in *.gitignore* for a reason. Do not commit credentials.

```
grunt deploy:<staging|production>
```

