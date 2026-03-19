function AboutPage () {
    return (
        <div className="about" >
            <div className="about-info">
                <h1>Acerca de</h1>
                <p>React Kanban App es una aplicación de gestión de tareas diseñada para ayudar a los usuarios a organizar su trabajo de forma visual, clara e intuitiva. El proyecto está basado en la metodología Kanban, que permite seguir el estado de cada tarea a través de diferentes columnas: To Do, In Progress y Done.
                    La aplicación permite crear, visualizar y gestionar tareas dentro del tablero, facilitando el seguimiento del progreso de cada actividad. Cada tarea incluye información relevante como el título, la descripción, la fecha y la persona asignada, lo que hace más sencilla la organización del trabajo y la colaboración.
                    Además, la interfaz incorpora funciones útiles como la búsqueda de tareas por título y una estructura visual pensada para que la experiencia sea cómoda, rápida y fácil de entender. De esta forma, el usuario puede tener una visión general del estado de sus tareas en un solo vistazo.
                    Este proyecto ha sido desarrollado como una solución práctica para mejorar la planificación, la productividad y el control del flujo de trabajo, combinando una interfaz sencilla con un sistema de organización eficaz.
                </p>
            </div>
            
            <h1>Sobre nosotros</h1>
            <div className="team-info">
                <div>
                    <h3>Jaume Barriuso</h3>
                    <p>
                        <a href="https://github.com/Jiems24" target="blank_">Github</a>
                    </p>
                    <p>
                        <a href="https://www.linkedin.com/in/jaume-girbau-barriuso-7011b0198" target="blank_">LinkedIn</a>
                    </p>
                </div>

                <div>
                    <h3>Enrique Victorero</h3>
                    <p>
                        <a href="https://github.com/superquique" target="blank_">Github</a>
                    </p>
                    <p>
                        <a href="https://www.linkedin.com" target="blank_">LinkedIn</a>
                    </p>
                </div>
            </div>
        </div>
        
    )
}

export default AboutPage;