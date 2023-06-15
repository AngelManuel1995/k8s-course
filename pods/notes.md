## Ejercicios:

1. Crear un Pod con la imagen de nginx
  ```
    kubectl run nginx --image=nginx --port=80
  ```
2. Crear un Pod con la imagen de busybox
3. Crear un Pod que ejecute un comando
4. Crear un Pod con la imagen de mongo y con el puerto del servicio
5. Crear un Pod con la imagen de busybox con una variable de entorno
6. Crear cinco Pods con el siguiente label environment=prod
7. Crear cinco Pods con el siguiente label environment=devevelopment
8. Crear cinco Pods con el siguiente label environment=testing
9. Listar solo los pods con el label environment=prod y environment=devevelopment
10. Eliminar solo los pods con el label environment=testing
11. Crear un Pod que se elimine cuando ejecute el comando **echo "Hello K8S"**
9. Crear un Pod con dos contenedores.
10. Probar la conexión entre dos contenedores dentro del mismo pod mediante localhost