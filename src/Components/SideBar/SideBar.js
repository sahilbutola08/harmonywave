import React from "react";

const SideBar = () => {
    return (
        <>
            <div className="sidebar-container">
                <div className="sidebar-title">
                    <h2>HarmonyWave</h2>
                </div>
                <div className="sidebar-my-songs">
                    <div className="sidebar-my-songs-header">
                        <h3>My songs list</h3>
                    </div>
                    <div className="siderbar-my-songs-list">
                        <ul>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SideBar;