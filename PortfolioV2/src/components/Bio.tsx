function Bio({ projectVisible, experienceVisible, involveVisible }) {
    return (
        <div className="bio-wrap">
            <h1 className="gradient-text">Andrew Lai</h1>
            <h2>Computer Engineering @ SFU</h2>

            <div className="bio-text">
                <h3>
                    An engineer and designer constantly looking for
                    opportunities to grow my technological skills and expertise.
                    <br></br>
                    <br></br>
                    With a wide array of interests in topics such as&nbsp;
                    <span className="p-bold">
                        startups, machine and deep learning, embedded systems,
                        and quantum computing,
                    </span>{" "}
                    I am always putting work into learning about this
                    ever-changing world.
                    <br></br>
                    <br></br>
                    Want to discuss research or have a project idea? Don't
                    hesitate to reach out at:
                    <span className="p-bold">
                        &nbsp;the.andrew.lai@gmail.com.
                    </span>
                </h3>
            </div>

            <div className="tob-wrap">
                <div style={{ display: "flex" }}>
                    {experienceVisible ? (
                        <>
                            <p style={{ marginRight: "11px" }}>•</p>
                            <p className="tob in-view caps">
                                <a
                                    href="#experience"
                                    // onClick={(e) =>
                                    //     handleClick(e, "experience")
                                    // }
                                >
                                    EXPERIENCE
                                </a>
                            </p>
                        </>
                    ) : (
                        <>
                            <p style={{ marginRight: "10px" }}>&nbsp;&nbsp;</p>
                            <p className="tob caps">
                                <a
                                    href="#experience"
                                    // onClick={(e) =>
                                    //     handleClick(e, "experience")
                                    // }
                                >
                                    EXPERIENCE
                                </a>
                            </p>
                        </>
                    )}
                </div>
                <div style={{ display: "flex" }}>
                    {projectVisible ? (
                        <>
                            <p style={{ marginRight: "11px" }}>•</p>
                            <p className="tob in-view caps">
                                <a
                                    href="#projects"
                                    // onClick={(e) => handleClick(e, "projects")}
                                >
                                    PROJECTS
                                </a>
                            </p>
                        </>
                    ) : (
                        <>
                            <p style={{ marginRight: "10px" }}>&nbsp;&nbsp;</p>
                            <p className="tob caps">
                                <a
                                    href="#projects"
                                    // onClick={(e) => handleClick(e, "projects")}
                                >
                                    PROJECTS
                                </a>
                            </p>
                        </>
                    )}
                </div>

                <div style={{ display: "flex" }}>
                    {involveVisible ? (
                        <>
                            <p style={{ marginRight: "11px" }}>•</p>
                            <p className="tob in-view caps">
                                <a
                                    href="#involvement"
                                    onClick={(e) =>
                                        handleClick(e, "involvement")
                                    }
                                >
                                    INVOLVEMENT
                                </a>
                            </p>
                        </>
                    ) : (
                        <>
                            <p style={{ marginRight: "10px" }}>&nbsp;&nbsp;</p>
                            <p className="tob caps">
                                <a
                                    href="#involvement"
                                    onClick={(e) =>
                                        handleClick(e, "involvement")
                                    }
                                >
                                    INVOLVEMENT
                                </a>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Bio;
