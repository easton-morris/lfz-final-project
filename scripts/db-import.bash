#!/bin/bash -e

test -f .env && source .env
psql $DATABASE_URL -f database/schema.sql -f database/update-cards.js -f database/data.sql
