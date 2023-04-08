# Challenge De Sistema de Clinica
## Enunciado
La clinica cuenta con una lista con medicos y pacientes.

De los medicos se conoce el numero de matricula, nombre y especialidad.

De los pacientes se conoce numero de historia clinica, nombre y una lista de las consultas realizadas.
Las consultas pueden ser en consultorio o la realizacion de una practica medica. 
De todas las consultas se sabe la fecha de realizacion, el profesional que la realiza, el costo, y la descripcion y el costo del material descartable en las pracicas medicas.

 * Plantear diseño UML y de Base de Datos 
 * Llevar a cabo algun framework de frontend(Puede ser react, angular o vue)
 * Generar una herencia persona - médico - paciente 

## Levantar el proyecto
- Se necesita usar [docker](https://www.swhosting.com/es/comunidad/manual/como-instalar-docker-en-tu-propio-servidor)
- Una vez instalado solo se ejecuta en la terminal, ubicada en la direccion del proyecto, el siguiente comando:
```bash
docker compose build
```
una vez hayas construido el contenedor sigue levantar el proyecto:
```bash
docker compose up -d
```

# Proyecto
## Frontend
- Utilice el framework de front vue 3
## Backend
- .Net 6
- c#
## Base de datos
- SqlServer

## Ide
 - [Visual studio community 2019](https://my.visualstudio.com/Downloads?q=visual%20studio%202019&wt.mc_id=o~msft~vscom~older-downloads)
 - [SQL Server Management Studio](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15)

## Nugets a utilizar para .Net
- EntityFrameworkCore
- EntityFrameworkCore.Tools
- Microsoft.EntityFrameworkCore.Design
- Microsoft.EntityFrameworkCore.SqlServer
# Planteamiento de Uml
## Base de datos
![image](https://user-images.githubusercontent.com/64883289/161388948-c5f5eaa2-bed7-4059-aea4-2384e3ac9425.png)
## Clases
![image](https://user-images.githubusercontent.com/64883289/161389629-e35ee04c-9817-4002-b2aa-ccf9cce68bff.png)



## Autor [Ariel Perez](https://github.com/ArielEzequielPerez)