import React from "react";
import p1 from "../assets/mental1.jpg";
import p2 from "../assets/mental2.jpg";
import p4 from "../assets/mental4.jpg";
import km from "../assets/km.png";
import pc from "../assets/pc.png";
import vp from "../assets/vp.png";

export default function Messages() {
    return (
        <div style={{ zIndex: 1 }}>
            <div
                className="poppins text-xl flex justify-center font-bold my-4"
                style={{ textAlign: "center", color: "#61DBFB" }}
            >
                What mental health needs is more sunlight, more candor, and more
                unashamed conversation.
            </div>
            <div className="flex justify-between mx-8 poppins text-xl my-4 font-bold">
                <div>Blogs</div>
                <div className="text-green-500 border-green-500 border-b-2">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        More
                    </a>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 p-2">
                <div>
                    <img
                        src={p1}
                        alt=""
                        style={{ height: "150px" }}
                        className="rounded-t-xl"
                    />
                    <div
                        className="poppins font-bold flex rounded-b-xl justify-center text-md py-2 hover:text-gray-700 px-4 bg-gray-100"
                        style={{ textAlign: "center" }}
                    >
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            Mental Health Awareness: Myths and Facts
                        </a>
                    </div>
                </div>
                <div>
                    <img
                        src={p2}
                        alt=""
                        style={{ height: "150px" }}
                        className="w-full rounded-t-xl"
                    />
                    <div
                        className="poppins font-bold  rounded-b-xl flex justify-center text-md py-2 hover:text-gray-700 px-4 bg-gray-100"
                        style={{ textAlign: "center" }}
                    >
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            How to Help a Loved One Who has Panic or Anxiety
                            Attacks?
                        </a>
                    </div>
                </div>
                <div>
                    <img
                        src={p4}
                        alt=""
                        style={{ height: "150px" }}
                        className="w-full rounded-t-xl"
                    />
                    <div
                        className="poppins font-bold  rounded-b-xl flex justify-center text-md py-2 hover:text-gray-700 px-4 bg-gray-100"
                        style={{ textAlign: "center" }}
                    >
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            Anxiety Disorder - Types, Symptoms and Treatment
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mx-8 poppins text-xl my-4 font-bold">
                <div>Volunteers</div>
                <div className="text-purple-500 border-purple-500 border-b-2">
                    Book An Appointment
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 p-2">
                <div>
                    <div className="mb-4 flex justify-center">
                        <img
                            src={km}
                            alt=""
                            style={{ height: "80px", width: "80px" }}
                            className="rounded-full"
                        />
                    </div>
                    <div
                        className="poppins font-bold flex justify-center text-md py-2 hover:text-gray-700 px-4 bg-gray-100  rounded-t-xl"
                        style={{ textAlign: "center" }}
                    >
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            Jhon Doe
                        </a>
                    </div>
                    <div className="flex justify-center bg-gray-100 poppins text-sm py-2  rounded-b-xl">
                        <span className="bg-green-500 text-sm hover:bg-green-700 rounded-md poppins text-white px-4">
                            Contact
                        </span>
                    </div>
                </div>
                <div>
                    <div className="mb-4 flex justify-center">
                        <img
                            src={pc}
                            alt=""
                            style={{ height: "80px", width: "80px" }}
                            className="rounded-full"
                        />
                    </div>
                    <div
                        className="poppins font-bold flex justify-center text-md py-2 hover:text-gray-700 px-4 bg-gray-100  rounded-t-xl"
                        style={{ textAlign: "center" }}
                    >
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            Erica Brown
                        </a>
                    </div>
                    <div className="flex justify-center bg-gray-100 poppins text-sm py-2  rounded-b-xl">
                        <span className="bg-green-500  hover:bg-green-700 text-sm rounded-md poppins text-white px-4">
                            Contact
                        </span>
                    </div>
                </div>
                <div>
                    <div className="mb-4 flex justify-center">
                        <img
                            src={vp}
                            alt=""
                            style={{ height: "80px", width: "80px" }}
                            className="rounded-full"
                        />
                    </div>
                    <div
                        className="poppins font-bold flex justify-center text-md py-2 hover:text-gray-700 px-4 bg-gray-100 rounded-t-xl"
                        style={{ textAlign: "center" }}
                    >
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            Ishwarya
                        </a>
                    </div>
                    <div className="flex justify-center bg-gray-100 poppins text-sm py-2 rounded-b-xl">
                        <span className="bg-green-500 hover:bg-green-700 text-sm rounded-md poppins text-white px-4">
                            Contact
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
