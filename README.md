# UD2-08 Barra de progreso personalizable

Componente `CustomProgressBarComponent` (Angular + Bootstrap) personalizable mediante inputs.

| Input | Tipo | Defecto | Descripción |
|---|---|---|---|
| `value` | number | 0 | Valor de progreso (0-100) |
| `color` | string | `primary` | Color Bootstrap (`success`, `danger`...) o CSS (`#ff00aa`) |
| `striped` | boolean | false | Estilo rayado |
| `animated` | boolean | false | Animación de las rayas |
| `showLabel` | boolean | false | Muestra el porcentaje dentro de la barra |
| `height` | number | 20 | Altura en px |

```html
<app-custom-progress-bar [value]="75" color="success" striped animated showLabel />
```

## Ejecutar
```
npm install
ng serve
```
