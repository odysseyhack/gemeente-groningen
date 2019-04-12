#!/bin/sh
trap stop INT

function stop() {
    echo "Shutting Down..."
    kill $GANACHE_PID
    exit
}

if [ "$1" = new ]
then
    ganache-cli --quiet &
    GANACHE_PID=$!
    echo "Deploying Contracts"
    (cd blockchain ; truffle migrate --reset)
fi
echo "Starting Client"
# (cd client ; npm start &)
