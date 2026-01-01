# Regala Futuro - Website

Sitio web oficial de **Regala Futuro**, una organización sin fines de lucro que reduce la brecha educativa en comunidades vulnerables del Perú mediante donación estructurada de útiles escolares, libros y tecnología educativa básica.

## 🎯 Acerca del Proyecto

Este es un sitio web moderno, rápido y mobile-first construido con Next.js, TypeScript y TailwindCSS. El objetivo principal es:

- Convertir visitantes en donantes (dinero + donaciones en especie)
- Permitir que ONGs, escuelas y comunidades soliciten apoyo
- Mostrar transparencia e impacto medible
- Hacer visible el voluntariado y reclutar voluntarios
- Generar confianza y credibilidad

## 🚀 Tecnologías

- **Framework**: [Next.js 14](https://nextjs.org/) con App Router
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [TailwindCSS](https://tailwindcss.com/)
- **Tipografías**: Inter y Poppins (Google Fonts)
- **Iconos**: Heroicons (SVG inline)

## 📁 Estructura del Proyecto

```
RegalaFuturoweb/
├── src/
│   ├── app/                      # App Router pages
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Home page
│   │   ├── globals.css          # Global styles
│   │   ├── nosotros/            # About page
│   │   ├── como-funciona/       # How It Works page
│   │   ├── donar/               # Donate page
│   │   ├── solicitar-apoyo/     # Request Support page
│   │   ├── impacto/             # Impact & Transparency page
│   │   ├── eventos-voluntariado/ # Events & Volunteering page
│   │   ├── contacto/            # Contact page
│   │   └── preguntas/           # FAQ page
│   ├── components/
│   │   ├── layout/              # Layout components (Navbar, Footer)
│   │   └── ui/                  # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── FormField.tsx
│   │       ├── CTASection.tsx
│   │       ├── Stepper.tsx
│   │       ├── KPIGrid.tsx
│   │       └── IconCard.tsx
├── public/                       # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🛠️ Instalación y Configuración

### Requisitos Previos

- Node.js 18.x o superior
- npm, yarn, o pnpm

### Pasos para Ejecutar Localmente

1. **Clonar el repositorio** (o descomprimir el proyecto)

```bash
cd RegalaFuturoweb
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Ejecutar el servidor de desarrollo**

```bash
npm run dev
```

4. **Abrir en el navegador**

Visita [http://localhost:3000](http://localhost:3000) para ver el sitio.

## 📄 Páginas Disponibles

| Ruta | Descripción |
|------|-------------|
| `/` | Página de inicio con hero, misión, impacto y CTAs |
| `/nosotros` | Sobre Regala Futuro: misión, visión, principios |
| `/como-funciona` | Proceso de trabajo, kits educativos, transparencia |
| `/donar` | Formulario de donación (monetaria y en especie) |
| `/solicitar-apoyo` | Formulario para comunidades que necesitan apoyo |
| `/impacto` | KPIs, transparencia, impacto medible |
| `/eventos-voluntariado` | Calendario de eventos y formulario de voluntariado |
| `/contacto` | Formulario de contacto, mapa, FAQs |
| `/preguntas` | Preguntas frecuentes completas |

## 🎨 Características de Diseño

- **Mobile-first**: Diseñado primero para dispositivos móviles
- **Responsive**: Se adapta perfectamente a todos los tamaños de pantalla
- **Accesible**: Alto contraste, navegación por teclado, labels semánticos
- **Animaciones sutiles**: Fade-in, slide-up, hover effects
- **Paleta de colores cálida**: Naranja (primary), verde azulado (secondary), cálidos neutrales
- **Tipografía clara**: Inter para cuerpo, Poppins para títulos

## 🔧 Comandos Disponibles

```bash
# Desarrollo
npm run dev        # Inicia servidor de desarrollo en puerto 3000

# Producción
npm run build      # Construye la aplicación para producción
npm run start      # Inicia el servidor de producción

# Linting
npm run lint       # Ejecuta ESLint para verificar código
```

## 📦 Componentes Reutilizables

### UI Components

- **Button**: Botón con variantes (primary, secondary, outline) y tamaños
- **Card**: Tarjeta con hover effect opcional
- **FormField**: Input, Textarea, Select, Checkbox con validación
- **CTASection**: Sección de llamado a la acción con gradientes
- **Stepper**: Visualización de procesos paso a paso
- **KPIGrid**: Grid de indicadores clave
- **IconCard**: Tarjeta con icono, título y descripción

### Layout Components

- **Navbar**: Navegación principal con menú móvil
- **Footer**: Footer completo con enlaces, contacto y redes sociales

## 🌐 SEO y Metadata

Cada página incluye:
- Title específico
- Description optimizada para SEO
- OpenGraph tags para redes sociales
- Twitter Card metadata
- Keywords relevantes

## 📱 Características Funcionales

### Formularios

Todos los formularios incluyen:
- Validación client-side
- Estados de carga
- Mensajes de éxito/error
- Campos requeridos marcados
- Accesibilidad completa

### Donaciones

- Opciones de donación única o mensual
- Montos preestablecidos y personalizados
- Donación en especie con checklist
- Mensaje de impacto en tiempo real
- Timeline "Qué pasa después"

### Transparencia

- KPIs actualizados
- Distribución financiera
- Impacto regional
- Gráficos de crecimiento
- Reportes descargables

## 🚀 Próximos Pasos (Sugerencias)

Para llevar este sitio a producción, considera:

1. **Backend y Base de Datos**
   - Conectar formularios a una API (Express, Django, etc.)
   - Base de datos para almacenar donaciones y solicitudes
   - Sistema de envío de emails (SendGrid, Mailgun)

2. **Pasarela de Pagos**
   - Integrar Culqi, Mercado Pago o Stripe
   - Procesar pagos recurrentes
   - Generar recibos automáticos

3. **CMS**
   - Integrar Strapi, Sanity o Contentful
   - Gestionar eventos, historias de impacto
   - Actualizar KPIs fácilmente

4. **Analytics**
   - Google Analytics o Plausible
   - Tracking de conversiones
   - Heatmaps con Hotjar

5. **Testing**
   - Unit tests con Jest
   - E2E tests con Playwright
   - Accessibility testing

6. **Deploy**
   - Vercel (recomendado para Next.js)
   - Netlify
   - AWS Amplify
   - Configurar dominio personalizado

## 📞 Contacto

- **Email**: contacto@regalafuturo.org
- **Teléfono**: +51 999 999 999
- **Ubicación**: Lima, Perú

## 📄 Licencia

Este proyecto fue desarrollado para Regala Futuro. Todos los derechos reservados.

---

**Desarrollado con ❤️ para transformar vidas a través de la educación**

Un cuaderno hoy, un futuro mañana. 🎓

# RegalaFuturoWeb
