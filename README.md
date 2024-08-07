# pruebas-unit

## Proyecto de Vue.js: Test de Componentes 

Este proyecto contiene pruebas unitarias para los componentes  en una aplicación Vue.js. Las pruebas están diseñadas para validar que el componente se renderiza correctamente y que su salida HTML coincide con un snapshot almacenado.

## Estructura del Código de Pruebas
El código de pruebas utiliza @vue/test-utils y Jest para realizar las siguientes validaciones:

## Importación de Dependencias:


`import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'
Estas líneas importan shallowMount de @vue/test-utils para montar el componente de manera superficial, y el componente HomeView desde la ruta @/views/HomeView.vue.`

## Descripción del Componente:


`describe('Componente HomeView.vue', () => {
Este bloque describe agrupa las pruebas relacionadas con el componente HomeView.vue.

Primera Prueba: Validación del Snapshot`

`
test('Validación de match con el snapshot', () => {
  //Selección del sujeto de pruebas

  //Aserción
})
Este bloque define una prueba individual. La prueba no está completa en esta sección, por lo que no realiza ninguna acción.`

## Segunda Prueba Completa: Validación del Snapshot


`test('Validación de match con el snapshot', () => {
  //Selección el Sujeto de pruebas
  const wrapper = shallowMount(HomeView)

  //Aserción
  expect(wrapper.html()).toMatchSnapshot()
})`
## Esta es una prueba completa que realiza las siguientes acciones:

`Selección del Sujeto de Pruebas:


const wrapper = shallowMount(HomeView)
shallowMount se utiliza para montar el componente HomeView de forma superficial, lo que significa que no se renderizan los componentes hijos.`

## Aserción:


`expect(wrapper.html()).toMatchSnapshot()
Esta línea verifica que la salida HTML del componente montado coincide con el snapshot almacenado. Si no coincide, la prueba fallará, indicando que la salida del componente ha cambiado desde la última vez que se actualizó el snapshot.`

## Requisitos Previos
Para ejecutar estas pruebas, necesitas tener instalados los siguientes paquetes:

@vue/test-utils
jest
```
npm run lint
```


