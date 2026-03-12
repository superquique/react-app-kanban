function AboutPage () {
    return (
        <div className="about" >
            <div className="about-info">
                <h1>Acerca de</h1>
                <p>Brief desription of the project Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam dolorum odio quisquam quibusdam tenetur eius doloremque libero! Numquam perferendis quibusdam, omnis consequuntur hic odit veniam dolorum tempora, enim, voluptatibus asperiores! </p>
            </div>

            <div className="team-info">
                <div>
                    <h1>Sobre nosotros</h1>
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