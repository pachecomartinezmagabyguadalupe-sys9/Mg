# Ajuste de Tiempo — Máquinas de Coser Brother

Presentación interactiva (HTML/CSS/JS, sin dependencias externas) para diagnosticar y
corregir la sincronización aguja–garfio ("timing") en máquinas de coser domésticas Brother.

## Cómo usarla

Abre `index.html` en cualquier navegador. Incluye:

- Navegación por diapositivas (botones, flechas del teclado, puntos indicadores).
- Explicación del mecanismo aguja–garfio y causas/síntomas del desajuste.
- **Simulador interactivo**: controla el giro del volante y el ajuste del engranaje
  del garfio para visualizar cuándo la sincronización es correcta.
- Procedimiento de ajuste paso a paso, verificación de holgura y reensamblaje.
- Tabla de solución de problemas (acordeón) y checklist final marcable.

## Vídeo programático con Remotion

El repositorio incluye además un proyecto [Remotion](https://www.remotion.dev) 4.0.526
para generar vídeos por código (React + TypeScript).

```bash
npm install          # instalar dependencias
npm run dev          # abrir Remotion Studio (preview en vivo)
npm run render       # renderizar a out/ajuste-de-tiempo.mp4
npm run still        # renderizar un fotograma suelto a out/frame.png
npm run lint         # eslint + tsc
```

Estructura:

- `src/index.ts` — punto de entrada (`registerRoot`).
- `src/Root.tsx` — registro de composiciones.
- `src/Composition.tsx` — composición `AjusteDeTiempo` (1920×1080, 30 fps, 6 s).
- `remotion.config.ts` — configuración del renderer (rspack + Tailwind v4).
- `public/` — recursos estáticos referenciados con `staticFile()`.

### Agent Skills

Las 12 skills oficiales de `remotion-dev/skills` están instaladas en `.agents/skills/`
y enlazadas desde `.claude/skills/`, para que Claude Code, Cursor, Codex y otros
agentes conozcan las buenas prácticas de Remotion:

`remotion-best-practices`, `remotion-create`, `remotion-markup`, `remotion-studio`,
`remotion-render`, `remotion-maps`, `remotion-captions`, `remotion-saas`,
`remotion-interactivity`, `remotion-docs`, `remotion-upgrade`, `remotion-multimedia`.

Para actualizarlas: `npm run skills:update`.

> **Nota sobre entornos sin acceso a `remotion.media`:** Remotion descarga su propio
> Chrome Headless Shell la primera vez que renderiza. Si esa descarga está bloqueada
> por la red, apunta a un Chromium ya instalado:
> `npx remotion render AjusteDeTiempo --browser-executable=/ruta/a/chrome`.

## Aviso

Los valores numéricos (mm, grados) son ilustrativos y de carácter general; consulta
el manual de servicio del modelo específico de tu máquina Brother para las
especificaciones exactas.
