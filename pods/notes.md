## Ejercicios:

1. Crear un Pod con la imagen de nginx
2. Crear un Pod con la imagen de busybox
3. Crear un Pod que ejecute un comando
4. Crear un Pod con la imagen de mongo y con el puerto del servicio
5. Crear un Pod con la imagen de busybox con una variable de entorno
6. Crear cinco Pods con el siguiente label environment=prod
7. Crear cinco Pods con el siguiente label environment=development
8. Crear cinco Pods con el siguiente label environment=testing
9. Listar solo los pods con el label environment=prod y environment=devevelopment
10. Listar solo los pods con el label diferente de environment=prod
11. Listar solo los pods con el label diferente de environment=prod y environment=test
12. Eliminar solo los pods con el label environment=testing
14. Crear un Pod con dos contenedores.
15. Probar la conexión entre dos contenedores dentro del mismo pod mediante localhost
16. Mirar los logs de un pod
  * solo 50 lineas
  * los de los últimos 10 minutos
  * los del pod anterior.
  * con la fecha que fueron creados.
17. Copiar un archivo a un pod y desde un pod