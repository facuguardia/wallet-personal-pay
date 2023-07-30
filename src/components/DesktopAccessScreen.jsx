const DesktopAccessScreen = () => {
  return (
    <div className="bg-gray-800 text-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Accediste desde un formato de pantalla no disponible.</h1>
        <p className="text-lg">Por favor, utiliza un dispositivo móvil para acceder correctamente a la aplicación, o bien, activa las herramientas de desarrollo en formato mobile y recarga la página. Disculpa las molestias.</p>
      </div>
    </div>
  );
};

export default DesktopAccessScreen;
