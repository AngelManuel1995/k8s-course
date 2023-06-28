#!/bin/sh

echo "Iniciando el proceso de failure random..."
sleep 10

RANDOM_NUMBER=$(shuf -i 1-100 -n 1)
echo "El número aleatorio generado es: $RANDOM_NUMBER"

if [ "$RANDOM_NUMBER" -gt 50 ]; then
  echo "El número es mayor a 50"
  exit 0
else
  echo "El número es menor a 50"
  exit 1
fi

