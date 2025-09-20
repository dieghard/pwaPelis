# 🎬 Mi Biblioteca de Películas y Series - PWA

Una aplicación web progresiva (PWA) moderna con diseño retro 80entoso para gestionar tu biblioteca personal de películas y series. Utiliza la API de OMDB para buscar y obtener información detallada, con funcionalidades avanzadas de seguimiento y estadísticas.

## ✨ Características Principales

### 🔍 **Búsqueda y Exploración**
- **Búsqueda inteligente en OMDB**: Busca películas y series por título con resultados instantáneos
- **Filtros por género**: Chips clickeables para filtrar por género en tiempo real
- **Información detallada**: Pósters, sinopsis, año, calificaciones y más

### 📚 **Gestión de Biblioteca**
- **Biblioteca personal**: Agrega y organiza películas/series en tu colección
- **Sistema de visto/no visto**: Marca contenido como visto con calificaciones personales (1-10)
- **Comentarios y reseñas**: Agrega notas y comentarios personales
- **Búsqueda y filtros**: Filtra tu biblioteca por título o género

### 📺 **Gestión Avanzada de Series**
- **Seguimiento de episodios**: Sistema completo para marcar episodios individuales
- **Organización por temporadas**: Vista organizada por temporadas y episodios
- **Progreso visual**: Barras de progreso para ver avance por serie
- **Estadísticas de episodios**: Contador de episodios vistos vs. pendientes

### 📊 **Panel de Estadísticas**
- **Métricas completas**: Películas vistas, series en progreso, total de contenido
- **Estadísticas de episodios**: Total de episodios, vistos, pendientes y porcentaje
- **Indicadores visuales**: Barras de progreso y contadores en tiempo real
- **Actualización automática**: Las estadísticas se actualizan al instante

### 🎨 **Experiencia de Usuario**
- **Diseño retro cyberpunk**: Estética inspirada en los años 80/90 con efectos CRT
- **PWA completa**: Instalable como app nativa en cualquier dispositivo
- **Funcionamiento offline**: Service Worker para uso sin conexión
- **Responsive design**: Adaptable a móviles, tablets y desktop
- **Efectos visuales**: Animaciones, gradientes neón y efectos de pantalla retro

## 📋 Requisitos

- **Navegador moderno**: Chrome, Firefox, Edge, Safari con soporte PWA
- **Conexión a internet**: Para búsquedas OMDB (funciona offline una vez cargada)
- **API Key de OMDB**: Registro gratuito en [OMDB API](https://www.omdbapi.com/apikey.aspx)
- **Servidor local**: Para desarrollo (Python, Node.js, o Live Server)
- **Almacenamiento local**: ~5MB para datos offline y caché

## 🛠️ Instalación y Configuración

### 1. Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/mi-biblioteca-pelis.git
cd mi-biblioteca-pelis
```

### 2. Obtener API Key de OMDB

1. Visita [OMDB API](https://www.omdbapi.com/apikey.aspx)
2. Registrate gratis (1000 requests/día)
3. Guarda tu API key

### 3. Configurar la API Key

Edita el archivo `index.html` y reemplaza `'TU_API_KEY_AQUI'` con tu clave:

```javascript
const API_KEY = 'tu-api-key-aquí';
```

### 4. Ejecutar la Aplicación

**Opción A: Python (Recomendado)**

```bash
python -m http.server 8000
# Abre http://localhost:8000 en tu navegador
```

**Opción B: Node.js**

```bash
npx serve .
# Sigue las instrucciones en la terminal
```

**Opción C: VS Code Live Server**

1. Instala la extensión "Live Server"
2. Click derecho en `index.html` → "Open with Live Server"

### 5. Instalar como PWA (Opcional)

1. Abre la app en Chrome/Edge
2. Click en el ícono de instalación en la barra de direcciones
3. Confirma la instalación
4. ¡Ya tienes la app en tu escritorio!

## 📖 Guía de Uso

### 🔍 **Búsqueda y Exploración**

1. **Buscar contenido**: Escribe un título en la barra de búsqueda y presiona Enter
2. **Filtrar por género**: Click en los chips de género para filtrar resultados
3. **Ver detalles**: Cada resultado muestra póster, sinopsis, año y calificación
4. **Agregar a biblioteca**: Click en "Agregar a Biblioteca" en cualquier resultado

### 📚 **Gestión de Biblioteca**

1. **Ver tu colección**: Desplázate a "Mi Biblioteca" para ver todo tu contenido
2. **Marcar como visto**: Click en "Marcar como vista" para calificar (1-10)
3. **Agregar comentarios**: Escribe reseñas personales en el modal
4. **Filtrar biblioteca**: Usa la búsqueda local o filtros de género
5. **Eliminar contenido**: Click en "Eliminar" para quitar de la biblioteca

### 📺 **Gestión de Series**

1. **Gestionar episodios**: Click en "Gestionar capítulos" en cualquier serie
2. **Marcar episodios**: Click individual en cada episodio para marcarlo como visto
3. **Ver progreso**: Las barras muestran el avance por temporada
4. **Refrescar datos**: Click en "Refrescar episodios" para actualizar información

### 📊 **Panel de Estadísticas**

- **Vista general**: El panel superior muestra métricas en tiempo real
- **Películas**: Total de películas en biblioteca y vistas
- **Series**: Series en progreso y completadas
- **Episodios**: Total de episodios, vistos, pendientes y porcentaje
- **Progreso visual**: Barras de progreso para seguimiento rápido

## 🛠️ Stack Tecnológico

### **Frontend**
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Diseño responsive con Flexbox/Grid, animaciones CSS
- **JavaScript ES6+**: Módulos, async/await, destructuring
- **Fuentes**: JetBrains Mono, Share Tech Mono (estética retro)

### **PWA & Caching**
- **Service Worker**: Funcionalidad offline y caché inteligente
- **Web App Manifest**: Instalación nativa y metadata
- **LocalStorage**: Persistencia de datos de biblioteca y configuración
- **Cache API**: Optimización de recursos y rendimiento

### **APIs & Servicios**
- **OMDB API**: Base de datos de películas y series
- **Fetch API**: Peticiones HTTP asíncronas
- **REST Architecture**: Comunicación con servicios externos

### **Diseño & UX**
- **Mobile-First**: Responsive design adaptativo
- **Cyberpunk Aesthetic**: Tema retro con efectos CRT
- **Animaciones CSS**: Transiciones suaves y efectos visuales
- **Accesibilidad**: Contraste adecuado y navegación por teclado

## 🏠 Arquitectura del Proyecto

```
pwaPelis/
├── index.html              # Aplicación principal (SPA)
├── manifest.json          # Configuración PWA
├── sw.js                  # Service Worker
├── screenshots/           # Capturas para documentación
├── README.md              # Documentación
├── LICENSE                # Licencia MIT
└── .gitignore             # Configuración Git
```

### **Componentes Principales**

- **`index.html`**: Single Page Application con todo el código
- **Styles**: CSS embebido con diseño cyberpunk responsive
- **JavaScript**: Lógica de aplicación, API calls, y manejo de estado
- **PWA Files**: Manifest y Service Worker para funcionalidad nativa

### **Patrones de Diseño**

- **MVC Pattern**: Separación de lógica, vista y datos
- **Event-Driven**: Sistema de eventos para interacciones
- **State Management**: LocalStorage para persistencia
- **Progressive Enhancement**: Funcionalidad básica + mejoras PWA

## � Características Avanzadas

### **🎯 Gestión Inteligente de Estado**
- Persistencia automática en LocalStorage
- Sincronización de datos entre sesiones
- Backup y restauración de biblioteca
- Optimización de memoria para grandes colecciones

### **🔄 Sistema de Actualizaciones**
- Cache versioning automático
- Actualizaciones en segundo plano
- Notificaciones de nuevas versiones
- Migración de datos entre versiones

### **🎨 Personalización Visual**
- Tema cyberpunk con efectos CRT
- Animaciones CSS optimizadas
- Iconos SVG adaptativos
- Diseño responsive fluid

### **🛡️ Manejo de Errores**
- Fallbacks para imágenes faltantes
- Reintento automático en fallos de API
- Notificaciones toast para feedback
- Validación de datos robusta



## 📱 Capturas de Pantalla

### Pantalla Principal

![Pantalla Principal](screenshots/main-screen.png)

*Interfaz principal con búsqueda y estadísticas*

### Resultados de Búsqueda

![Resultados de Búsqueda](screenshots/search-results.png)

*Búsqueda de películas con chips de género clickeables*

### Biblioteca Personal

![Biblioteca Personal](screenshots/library.png)

*Gestión de tu biblioteca con filtros y estadísticas detalladas*

### Gestión de Episodios

![Gestión de Episodios](screenshots/episodes-modal.png)

*Modal para marcar episodios de series como vistos*

### Versión Móvil

![Versión Móvil](screenshots/mobile-view.png)

*Diseño responsive adaptado para dispositivos móviles*

### Panel de Estadísticas

![Panel de Estadísticas](screenshots/stats-panel.png)

*Estadísticas completas de películas, series y episodios*

## 🤝 Contribuir al Proyecto

¡Las contribuciones son muy bienvenidas! Este proyecto está abierto a mejoras y nuevas funcionalidades.

### **Cómo Contribuir**

1. **Fork** el proyecto desde GitHub
2. **Clona** tu fork: `git clone https://github.com/tu-usuario/mi-biblioteca-pelis.git`
3. **Crea** una rama: `git checkout -b feature/nueva-funcionalidad`
4. **Desarrolla** tu funcionalidad o corrección
5. **Testea** thoroughly en diferentes navegadores
6. **Commit** con mensajes descriptivos: `git commit -m 'Agrega gestión de favoritos'`
7. **Push** a tu rama: `git push origin feature/nueva-funcionalidad`
8. **Abre** un Pull Request con descripción detallada

### **Áreas de Contribución**

- 🐛 **Bug fixes**: Corrección de errores y mejoras de estabilidad
- ✨ **Nuevas funcionalidades**: Ideas como favoritos, listas personalizadas, etc.
- 🎨 **Mejoras de UI/UX**: Diseño, animaciones, accesibilidad
- 📱 **Responsive**: Optimizaciones para diferentes dispositivos
- 🚀 **Performance**: Optimizaciones de velocidad y memoria
- 📝 **Documentación**: Mejoras en README, comentarios en código

### **Guías de Desarrollo**

- Mantener la estética cyberpunk existente
- Asegurar compatibilidad PWA
- Testear en Chrome, Firefox, Edge y Safari
- Documentar nuevas funcionalidades
- Seguir patrones de código existentes

## 🚀 Deployment y Hosting

### **Opciones de Hosting Gratuito**

**GitHub Pages**
```bash
# En tu repositorio de GitHub:
# Settings > Pages > Deploy from branch > main
# URL: https://tu-usuario.github.io/mi-biblioteca-pelis
```

**Netlify**
```bash
# Arrastra la carpeta del proyecto a netlify.com
# O conecta tu repositorio GitHub
# Auto-deploy en cada push
```

**Vercel**
```bash
npx vercel
# Sigue las instrucciones
# Deploy automático desde GitHub
```

### **Configuración de Producción**

1. **API Key**: Agrega tu OMDB API key
2. **HTTPS**: Asegúrate de usar HTTPS para PWA
3. **Domain**: Configura dominio personalizado (opcional)
4. **Analytics**: Agrega Google Analytics (opcional)

### **Optimizaciones**

- Compresión Gzip habilitada
- Cache headers configurados
- Service Worker optimizado
- Imágenes optimizadas

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## � Roadmap y Futuras Funcionalidades

- [ ] **Sistema de favoritos** con categorías personalizadas
- [ ] **Listas personalizadas** ("Para ver", "Favoritos", etc.)
- [ ] **Calificaciones externas** (IMDb, Rotten Tomatoes)
- [ ] **Recomendaciones** basadas en tu biblioteca
- [ ] **Exportar/Importar** biblioteca en JSON/CSV
- [ ] **Modo oscuro/claro** personalizable
- [ ] **Notificaciones** para nuevas temporadas
- [ ] **Seguimiento de amigos** y bibliotecas compartidas
- [ ] **Estadísticas avanzadas** con gráficos
- [ ] **Integración** con servicios de streaming

## �🙏 Agradecimientos

- [OMDB API](https://www.omdbapi.com/) por proporcionar los datos
- A mi familia que me aguanta siempre 🙏
- Guillermo Cochrane y Emanuel Perna por inspiración de sábado a la tarde y los mates 🧉 🚀
- Comunidad de desarrolladores por feedback y contribuciones
- Fuentes tipográficas: JetBrains Mono y Share Tech Mono

---

**⚡ Powered by Diego Markiewicz ⚡**  
📧 Email: [dieghard@gmail.com](mailto:dieghard@gmail.com)  


## 📞 Contacto y Soporte

- **Issues**: [GitHub Issues](https://github.com/tu-usuario/mi-biblioteca-pelis/issues)
- **Discussions**: [GitHub Discussions](https://github.com/tu-usuario/mi-biblioteca-pelis/discussions)
- **Email**: [dieghard@gmail.com](mailto:dieghard@gmail.com)

### 📊 Estadísticas del Proyecto

![GitHub stars](https://img.shields.io/github/stars/tu-usuario/mi-biblioteca-pelis)
![GitHub forks](https://img.shields.io/github/forks/tu-usuario/mi-biblioteca-pelis)
![GitHub issues](https://img.shields.io/github/issues/tu-usuario/mi-biblioteca-pelis)
![GitHub license](https://img.shields.io/github/license/tu-usuario/mi-biblioteca-pelis)

---

🍿 **¡Disfruta gestionando tu biblioteca de películas y series!** 🎥