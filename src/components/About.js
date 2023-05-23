import React from 'react'

export default function About() {
    return (
        <>
            <div className="accordion container w-75" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            About TextUtils
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>TextUtils is a Text Manupulation Tool.</strong> You can use TextUtils to Manupulate your text as you want. Uppercase, Lowercase, Capitalization, Remoe Extra Spaces and So On...
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            About Developer
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Developed by Modasser Hasan.</strong> A Student of Computer Science and Technology at Rangpur Polytechnic Institute.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Contact
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            GitHub: <a href="https://github.com/TheProjectsX" target="_blank" rel="noreferrer">https://github.com/TheProjectsX</a><br/>
                            Web: <a href="https://theprojectsx.github.io" target="_blank" rel="noreferrer">https://theprojectsx.github.io</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
