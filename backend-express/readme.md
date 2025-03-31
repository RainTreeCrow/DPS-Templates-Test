# Building the container image using the default builder

```
pack build backend-app:dev --path . --builder paketobuildpacks/builder:base
```
# Running the container image

```
docker run --rm -p 3001:3301 backend-app:dev  
```

> --rm Automatically remove the container when it exits

> -p 3001:3001 expose port 3001 to other Docker containers on the same network and 3001 to the host
