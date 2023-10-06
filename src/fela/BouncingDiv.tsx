import { createComponent } from 'react-fela';
import { createRenderer } from 'fela';

const renderer = createRenderer()

const zoomIN = () => ({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

renderer.renderKeyframe(zoomIN, { opacity: 1}) // => k1

// Función para mapear los estilos
const mapStylesToProps = () => ({
  animation: `${zoomIN} 3s ease-in linear`,
  opacity: 1,
});

// Crear el componente con los estilos y la animación
const BouncingDiv = createComponent(mapStylesToProps, 'div');

export default BouncingDiv;
