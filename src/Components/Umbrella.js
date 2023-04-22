import React, { useState } from 'react'
import BlueUmbrella from './Images/Blue-umbrella.png'
import PinkUmbrella from './Images/Pink-umbrella.png'
import YellowUmbrella from './Images/Yellow-umbrella.png'
import LodingIcon from './Images/loader_icon.svg'
import UploadIcon from './Images/upload_icon.svg'

const Umbrella = () => {

    const logoIcon = 'https://w7.pngwing.com/pngs/539/247/png-transparent-umbrella-logo-umbrella-umbrella-logo-black.png';
    const CloseBtn = 'https://img.icons8.com/ios-glyphs/256/delete-sign.png';
    let Blue = 'dodgerblue';
    const [bgColor, setBgColor] = useState(Blue);
    const [handleUmbrella, setHandleUmbrella] = useState(BlueUmbrella);
    const [logo, setLogo] = useState(false);
    const [uploadLogoText, setuploadLogoText] = useState("UPLOAD LOGO");
    const [crossLogo, secrossLogo] = useState(false);

    const HandleBlueClick = () => {
        console.log("Blue");
        let Color = 'dodgerblue';
        setBgColor(Color);
        setHandleUmbrella(BlueUmbrella)

    }

    const HandlePinkClick = () => {
        console.log("Pink");
        let Color = 'pink';
        setBgColor(Color);
        setHandleUmbrella(PinkUmbrella)
    }

    const HandleYellowClick = () => {
        console.log("Yellow");
        // setTimeout(setHandleUmbrella(LodingIcon), 3000);
        let Color = 'yellow';
        setBgColor(Color);
        setHandleUmbrella(LodingIcon)
        setHandleUmbrella(YellowUmbrella)
    }

    function LogoOfUmbrella() {
        return (
            <img src={logoIcon} className='logo' alt='logo' height="20px" />
        );
    }

    const UploadImage = () => {
        return (
            <input type="file" onChange={fileSelectorHandler} />
        );
    }

    const UploadLogo = () => {
        setLogo(LogoOfUmbrella)
        setuploadLogoText("Uploaded Successfully")
        secrossLogo(CloseBtnFunc)
    }

    const fileSelectorHandler = e => {
        console.log(e.target.files[0]);
    }

    function CloseBtnFunc() {
        return (
            <div>
                <img src={CloseBtn} onClick={CloseLogo} alt='upload logo' height="20px" />
            </div>
        );
    }
    function CloseLogo() {
        setLogo(false)
        setuploadLogoText("UPLOAD LOGO")
        secrossLogo(false)
    }

    // setTimeout(HandleYellowClick, 3000);

    return (
        <>
            <div className='umbrella-box'>
                <div>
                    <img src={handleUmbrella} alt='BlueUmbrella' height={`600px`} />
                    {logo}
                </div>
                <div className='umbrella-text-box' >
                    <h1>Custom Umbrella</h1>
                    <div className='circle-box'>
                        <button value="black" className='circle black' >&nbsp;&nbsp;</button>
                        <button className='circle grey' >&nbsp;&nbsp;</button>
                        <button className='circle green' >&nbsp;&nbsp;</button>
                        <button onClick={HandleBlueClick} className='circle sky' >&nbsp;&nbsp;</button>
                        <button className='circle brown' >&nbsp;&nbsp;</button>
                        <button onClick={HandleYellowClick} className='circle yellow' >&nbsp;&nbsp;</button>
                        <button className='circle orange' >&nbsp;&nbsp;</button>
                        <button onClick={HandlePinkClick} className='circle pink' >&nbsp;&nbsp;</button>

                    </div>
                    <div>
                        <h3>Customize Your Umbrella</h3>
                    </div>
                    <div>
                        <p>Upload a Logo for an instant preview.</p>
                    </div>
                    <div>
                        <p>.png and .jpg files only. Max. file size only 5MB.</p>
                    </div>
                    <div className='upload-box' style={{ background: bgColor }}>
                        <span>
                            {
                                // <input type="file" onChange={fileSelectorHandler} />
                            }
                            <img src={UploadIcon} onClick={UploadLogo} alt='upload logo' height="20px" />
                        </span>
                        <span>{uploadLogoText}</span>
                        <span>
                            {
                                // <img src={CloseBtn} onClick={CloseLogo} alt='upload logo' height="20px" />
                            }
                            {crossLogo}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Umbrella