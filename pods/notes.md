## Ejercicios:

1. Crear un Pod con la imagen de nginx
  ```
    kubectl run nginx --restart=Always  --image=nginx --port=80
  ```
2. Crear un Pod con la imagen de busybox
  ```
    kubectl run busybox --restart=Never --image=busybox
    kubectl run busybox --restart=Always --image=busybox
  ```
3. Crear un Pod que ejecute un comando
  ```
    kubectl run busybox --restart=Never --image=busybox -- echo "Hello k8s"
  ```  
4. Crear un Pod con la imagen de mongo y con el puerto del servicio
  ```
    kubectl run mongo --restart=Always --image=mongo --port=27017
  ```
5. Crear un Pod con la imagen de busybox con una variable de entorno
 ```
  kubectl run busybox --restart=Never --env=TEAM=EVOLUTION --image=busybox -- env
  kubectl run busybox --restart=Never --env=TEAM=EVOLUTION --image=busybox --command -- env
 ``` 
6. Crear cinco Pods con el siguiente label environment=prod
7. Crear cinco Pods con el siguiente label environment=devevelopment
8. Crear cinco Pods con el siguiente label environment=testing
9. Listar solo los pods con el label environment=prod y environment=devevelopment
10. Eliminar solo los pods con el label environment=testing
11. Crear un Pod que se elimine cuando ejecute el comando **echo "Hello K8S"**
9. Crear un Pod con dos contenedores.
10. Probar la conexión entre dos contenedores dentro del mismo pod mediante localhost