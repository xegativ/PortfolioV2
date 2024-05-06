import ViewMore from "./subcomponents/ViewMore";

function Projects() {
    return (
        <div id="projects" className="section-wrap">
            <p className="caps section-title">PROJECTS</p>
            <div>
                <div className="box project">
                    <div>
                        <div className="title">
                            <p>mySips</p>
                        </div>
                        <div>
                            <p className="description">
                                Website application that records and stores
                                drinks from your favourite beverage locations.
                            </p>
                        </div>
                        <div className="tags">
                            <p className="important">React</p>
                            <p className="important">TypeScript</p>
                            <p>HTML/CSS</p>
                            <p>Express</p>
                            <p>Node.js</p>
                            <p className="important">MySQL</p>
                            <p>Passport.JS</p>
                            <p>REST API</p>
                        </div>
                    </div>
                    <div className="img"></div>
                </div>
                <div className="box project">
                    <div>
                        <div className="title">
                            <p>OutfitLB</p>
                        </div>
                        <div>
                            <p className="description">
                                Desktop application that stores and manages
                                clothing, outfits, and closets.
                            </p>
                        </div>
                        <div className="tags">
                            <p>Python</p>
                            <p>Tkinter</p>
                            <p>MongoDB</p>
                            <p>PyMongo</p>
                        </div>
                    </div>
                    <div className="img"></div>
                </div>

                <div className="box project">
                    <div>
                        <div className="title">
                            <p>Portfolio V1</p>
                        </div>
                        <div>
                            <p className="description">
                                A single-paged application to host all my
                                projects and designs in one place.
                            </p>
                        </div>
                        <div className="tags">
                            <p>JavaScript</p>
                            <p>History API</p>
                            <p>GSAP</p>
                        </div>
                    </div>
                    <div className="img"></div>
                </div>
                <div className="box project">
                    <div>
                        <div className="title">
                            <p>Pola Party</p>
                        </div>
                        <div>
                            <p className="description">
                                A web application that catalogues polaroid
                                pictures.
                            </p>
                        </div>
                        <div className="tags">
                            <p>Python</p>
                            <p>Flask</p>
                            <p>PostgreSQL</p>
                            <p>Docker</p>
                            <p>Azure</p>
                        </div>
                    </div>
                    <div className="img"></div>
                </div>
                <div className="box project">
                    <div>
                        <div className="title">
                            <p>DevPost Scraper</p>
                        </div>
                        <div>
                            <p className="description">
                                Web scraper that collects submission data from
                                any given number of Devpost hackathon pages and
                                returns project data.
                            </p>
                        </div>
                        <div className="tags">
                            <p>Python</p>
                            <p>Flask</p>
                            <p>spaCy</p>
                            <p>NLP</p>
                        </div>
                    </div>
                    <div className="img"></div>
                </div>
                <ViewMore />
            </div>
        </div>
    );
}

export default Projects;
