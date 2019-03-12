## INGENIERÍA DEL CONOCIMIENTO

## Gonzalo Pajares

# Práctica 2: Árbol de decisión (ID3) (versión reducida)

1.- Preliminares

Se trata de implementar una versión reducida y preliminar del algoritmo ID3. Resulta conocido que este
algoritmo presenta recursividad a medida que se avanza en su ejecución.

El objetivo de la práctica consiste en implementar como máximo dos niveles de recursividad. No se pide
aplicar la toma de decisión mediante las reglas que se deberían generar.

Existe la herramienta WEKA, que puede servir de ayuda para su implementación
[http://www.cs.waikato.ac.nz/ml/weka/,](http://www.cs.waikato.ac.nz/ml/weka/,) con un manual ilustrativo que se acompaña (Curso de Doctorado,
Orallo y Ramírez, Universidad Politécnica de Valencia) y puede obtenerse en
[http://users.dsic.upv.es/~cferri/weka/CursDoctorat-weka.pdf,](http://users.dsic.upv.es/~cferri/weka/CursDoctorat-weka.pdf,) donde puede comprobarse la elaboración del
árbol de decisión. En la sección 2 describe los árboles de decisión (C4.5), que en WEKA se identifican
como J48.

La tabla para la construcción del árbol de decisión es la siguiente:

TiempoExterior Temperatura Humedad Viento Jugar
soleado caluroso alta falso no
soleado caluroso alta verdad no
nublado caluroso alta falso si
lluvioso templado alta falso si
lluvioso frio normal falso si
lluvioso frio normal verdad no
nublado frio normal verdad si
soleado templado alta falso no
soleado frio normal falso si
lluvioso templado normal falso si
soleado templado normal verdad si
nublado templado alta verdad si
nublado caluroso normal falso si
lluvioso templado alta verdad no

2 .- Planteamiento

```
a) La tabla anterior consta de CUATRO atributos (TiempoExterior, Temperatura, Humedad, Viento) y
un último correspondiente a la decisión (Jugar, con Si o no).
Se dispone de dos ficheros de texto:
```
```
AtributosJuego.txt  con los cuatro atributos
```
```
Juego.txt  con los valores de los atributos separados por comas: soleado,caluroso,alta,falso,no
```

```
b) Leer los ficheros
c) Estructurar los datos en dos estructuras que contengan: Lista de Ejemplos y Lista de Atributos
```
```
d) Implementar el algoritmo ID3 dándole como entrada Lista de Ejemplos y Lista de Atributos
```
```
e) Proporcionar a la salida: Atributo seleccionado y valores de esos atributos.
```
```
f) Para este primer nivel reestructurar los datos para aplicar la segunda recursividad.
```
3 .- Posibilidades de ampliación y mejora de la práctica

```
a) Implementar todos los niveles de recursividad.
```
```
b) Comprobar el correcto funcionamiento del algoritmo para los ejemplos de la tabla.
```
4 .- Entregables

```
Se entregará una memoria de la práctica consistente en:
```
```
a) Describir el sistema mediante una tarea de Clasificación de CommonKADS. La parte de
verificación debe suponerse, debido al hecho de que no se va a finalizar la recursividad.
```
```
b) Describir los detalles de implementación propios, tales como: lenguaje utilizado,
procedimiento seguido para su implementación, ampliaciones realizadas y todos aquellos
elementos considerados de interés.
```
```
c) Código ejecutable
```
```
d) Breve manual de usuario para poder ejecutar la práctica.
```