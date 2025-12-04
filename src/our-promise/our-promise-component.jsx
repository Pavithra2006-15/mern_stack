import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faChalkboardUser, faClock, faUserGraduate, faPeopleGroup, faAward } from "@fortawesome/free-solid-svg-icons";
import { OurPromiseStyle } from "./our-promise-style";

export default function OurPromise() {
    return (
        <OurPromiseStyle>
            <div className="whole">
                <h1 className="title">Our Promise</h1>

                <div className="sub-class1">
                    <div className="div1">
                        <FontAwesomeIcon icon={faBook} style={{ color: "#e197fc", fontSize: "35px" }} />
                        <h2>Quality Education</h2>
                        <p>We are committed to providing top-notch education that equips our learners with the skills and knowledge they need to succeed in their careers.</p>
                    </div>

                    <div className="div2">
                        <FontAwesomeIcon icon={faChalkboardUser} style={{ color: "#e197fc", fontSize: "35px" }} />
                        <h2>Expert Instructors</h2>
                        <p>Our instructors are highly skilled and experienced professionals who are passionate about teaching and dedicated to helping our learners achieve their goals.</p>
                    </div>

                    <div className="div3">
                        <FontAwesomeIcon icon={faClock} style={{ color: "#e197fc", fontSize: "35px" }} />
                        <h2>Flexible Learning</h2>
                        <p>We offer flexible learning options to accommodate schedules and learning preferences.</p>
                    </div>
                </div>

                <div className="sub-class2">
                    <div className="div4">
                        <FontAwesomeIcon icon={faUserGraduate} style={{ color: "#e197fc", fontSize: "35px" }} />
                        <h2>Personalized Attention</h2>
                        <p>We provide individualized support to ensure every learner succeeds.</p>
                    </div>

                    <div className="div5">
                        <FontAwesomeIcon icon={faPeopleGroup} style={{ color: "#e197fc", fontSize: "35px" }} />
                        <h2>Community Engagement</h2>
                        <p>We foster a positive learning community where everyone belongs.</p>
                    </div>

                    <div className="div6">
                        <FontAwesomeIcon icon={faAward} style={{ color: "#e197fc", fontSize: "35px" }} />
                        <h2>Continuous Improvement</h2>
                        <p>We constantly improve content and platform quality to give the best experience.</p>
                    </div>
                </div>
            </div>
        </OurPromiseStyle>
    );
}
