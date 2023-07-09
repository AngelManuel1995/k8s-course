## Ejercicios:

1. Crear un Pod con la imagen de nginx
  ```bash
    kubectl run nginx --restart=Always  --image=nginx --port=80
  ```
2. Crear un Pod con la imagen de busybox
  ```bash
    kubectl run busybox --restart=Never --image=busybox
    kubectl run busybox --restart=Always --image=busybox
  ```
3. Crear un Pod que ejecute un comando
  ```bash
    kubectl run busybox --restart=Never --image=busybox -- echo "Hello k8s"
  ```  
4. Crear un Pod con la imagen de mongo y con el puerto del servicio
  ```bash
    kubectl run mongo --restart=Always --image=mongo --port=27017
  ```
5. Crear un Pod con la imagen de busybox con una variable de entorno
 ```bash
  kubectl run busybox --restart=Never --env=TEAM=EVOLUTION --image=busybox -- env
  kubectl run busybox --restart=Never --env=TEAM=EVOLUTION --image=busybox --command -- env
 ``` 
6. Crear cinco Pods con el siguiente label environment=prod
  ```bash
    for i in {1..5}; do kubectl run busybox$i --restart=Never --image=busybox --labels=ambiente=prod -- sh -c 'sleep 9999'; done;
  ```
7. Crear cinco Pods con el siguiente label environment=development
  ```bash
    for i in {1..5}; do kubectl run busybox$i --restart=Never --image=busybox --labels=ambiente=development -- sh -c 'sleep 9999'; done;
  ```
8. Crear cinco Pods con el siguiente label environment=testing
  ```bash
    for i in {1..5}; do kubectl run busybox$i --restart=Never --image=busybox --labels=ambiente=testing -- sh -c 'sleep 9999'; done;
  ```
9. Listar solo los pods con el label environment=prod y environment=devevelopment
  ```bash
    kubectl get po --selector "label in (key1,key2)" //works like or
    kubectl get po -l "label in (key1,keys)"
    kubectl get po --selector "label=value,label1=value" //works like and
    kubectl get po -l "label=value1,label1=value"
  ```
10. Listar solo los pods con el label diferente de environment=prod
  ```bash
    kubectl get po --selector=label!=value
  ```
11. Listar solo los pods con el label diferente de environment=prod y environment=test
  ```bash
    kubectl get po --selector "label notin (prod,test)"
  ```
12. Eliminar solo los pods con el label environment=testing
  ```bash
    kubectl delete po --selector=environment=testing
  ```
14. Crear un Pod con dos contenedores.
  ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: multi-pod
      labels:
        type: pod
    spec:
      containers:
        - name: pod1
          image: nginx
          ports:
            - containerPort: 80
        - name: pod2
          image: busybox
          command:
            - "sh"
            - "-c"
            - "sleep 9999"
  ```
15. Probar la conexión entre dos contenedores dentro del mismo pod mediante localhost
16. Mirar los logs de un pod
  ```bash
    kubectl logs pod
  ```
  * solo 50 lineas
    ```bash
      kubectl logs pod --tail=50
    ```
  * los de los últimos 10 minutos
    ```bash
      kubectl logs pod --since=10m
    ```
  * los del pod anterior.
    ```bash
      kubectl logs pod --since=10m
    ```
  * con la fecha que fueron creados.
    ```bash
    kubectl logs pod --timestamps
    ```