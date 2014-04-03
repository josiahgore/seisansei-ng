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

**Note:** In order to deploy to an S3 website it is necessary to fill in AWS API keys in *grunt-aws.json*.

This file is included in *.gitignore* for a reason. Do not commit credentials.

```
grunt s3:<staging|production>
```

