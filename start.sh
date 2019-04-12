#!/bin/sh
trap stop INT

function stop() {
    echo "Shutting Down..."
    exit
}

if [ "$1" = new ]
then
    echo "Deploying Contracts"
    (cd blockchain ; truffle migrate --reset)
fi
echo "Starting Client"
(cd client ; npm start)
