#!/bin/sh

echo "Installing Server"
(cd server ; npm install);

echo "Installing Client"
(cd client ; npm install);
