# app-stamp

[![Build Status](https://travis-ci.org/gdereese/app-stamp.svg?branch=master)](https://travis-ci.org/gdereese/app-stamp)
[![SonarCloud Quality](https://sonarcloud.io/api/project_badges/measure?project=app-stamp&metric=alert_status)](https://sonarcloud.io/dashboard?id=app-stamp)
[![npm version](https://badge.fury.io/js/app-stamp.svg)](https://badge.fury.io/js/app-stamp)

## Summary

Generates a JSON file from various sources that uniquely identifies a versioned app or package.

Example uses:

- A SPA/web front-end can read the file and display the version to the user in the page footer
- A back-end API can return the version and/or Git hash from this file in an info/healthcheck endpoint to aid in issue diagnostics

## Features

- Combines info from various sources into a JSON file
  - Timestamp (current or specified)
  - MD5 hash of a specified file
  - Information from an NPM package.json file
  - Git repository information from a specified directory
- Choose which information sources to include

## Compatibility

This package has been tested on the following versions of Node.js:

- 8.x
- 10.x

## Installation using NPM

### Install as a local dependency

```
npm install app-stamp
```

### Install globally

```
npm install app-stamp -g
```

## Usage

### Command-line

```
Usage: app-stamp [options]

  Options:

    --date [value]             Include timestamp; accepts any valid numeric or string date representation (default: current date/time)
    --git [repo-dir]           Include info from Git repository (default: current directory)
    --hash <file-path>         Include MD5 hash of the specified file's contents
    --npm [package-json-path]  Include info from NPM package.json (default: package.json in current directory)
    --output-path <path>       Path to output file (default: stamp.json)
    --verbose                  Writes detailed output to console
    -h, --help                 output usage information
```

### Example

Command-line:

```
$ app-stamp --git --npm --output-path dist/stamp.json
```

stamp.json:

```
{
  "git_author": "jdoe <jdoe@mail.xxx>",
  "git_branch": "master",
  "git_commit": "a9b34e83946fe0ceac52e7d6e49545439e3ed600",
  "git_commit_date": "2018-08-10T12:06:32.000Z",
  "npm_author": "John Doe",
  "npm_name": "my-app",
  "npm_version": "1.2.3"
}
```
