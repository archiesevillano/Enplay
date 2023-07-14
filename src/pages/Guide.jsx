import step1 from "./../../src/assets/guides/1.png";
import step2 from "./../../src/assets/guides/2.png";
import step3 from "./../../src/assets/guides/3.png";
import step4 from "./../../src/assets/guides/4.png";
import step5 from "./../../src/assets/guides/5.png";
import step6 from "./../../src/assets/guides/6.png";
import step7 from "./../../src/assets/guides/7.png";
import step8 from "./../../src/assets/guides/8.png";
import step9 from "./../../src/assets/guides/9.png";
import step10 from "./../../src/assets/guides/10.png";
import step11 from "./../../src/assets/guides/11.png";

const steps = [
    {
        image: step1,
        instructions: "Search and choose the video that you want to download",
    },
    {
        image: step2,
        instructions: "Once you've selected a video, copy the URL above as shown in the image",
    },
    {
        image: step3,
        instructions: "Go to back to ENPLAY and paste the video URL. Make sure it is a valid URL",
    },
    {
        image: step4,
        instructions: "Choose your converter based on the URL that you have provided",
    },
    {
        image: step5,
        instructions: "Once you have selected your converter, click 'Convert'",
    },
    {
        image: step6,
        instructions: "Wait for few minutes to convert your video",
    },
    {
        image: step7,
        instructions: "Once conversion is successful, you will see the converted video which has 2 options. Click 'Check Download' and you will be redirected to another tab which will show your converted video or you can click 'Convert Next' to start a new conversion",
    },
    {
        image: step8,
        instructions: "In this step, you should already be at the new tab to check if it is the right video that you have converted. ",
    },
    {
        image: step9,
        instructions: "Once the video is confirm, click the three dots icon at the lower right of the video",
    },
    {
        image: step10,
        instructions: "You will have three options and one of them is 'Download'. Click 'Download' and wait for a moment for you download to start",
    },
    {
        image: step11,
        instructions: "Once downloaded, you can check the download file via your Browser or your Browser Default Directory. That's all.",
    },
]

const Guide = () => {
    return (
        <div className="container guide d-flex align-items-md-start align-items-center flex-column my-5 gap-5">
            <div className="container-fluid">
                <h1 style={{ fontFamily: "var(--inter)" }}>How to Download a Video</h1>
                <p className="m-0" style={{ fontFamily: "var(--inter)" }}>If you're new to online video downloading or don't consider yourself tech-savvy, we've got you covered. Below is a step-by-step guide that includes both written instructions and accompanying images. This guide aims to provide a clear understanding of how our online video downloader works.</p>
            </div>
            {
                steps.map((item, index) => {
                    return (<div key={item?.instructions} className="container guide__step m-0 p-0" style={{ maxWidth: "1000px" }}>
                        <img src={item?.image} alt="Not Available" className="guide__step_image" style={{
                            boxShadow:
                                `0px 0px 2.2px rgba(0, 0, 0, 0.042),
  0px 0px 5.3px rgba(0, 0, 0, 0.061),
  0px 0px 10px rgba(0, 0, 0, 0.075),
  0px 0px 17.9px rgba(0, 0, 0, 0.089),
  0px 0px 33.4px rgba(0, 0, 0, 0.108),
  0px 0px 80px rgba(0, 0, 0, 0.15)`
                            , border: "10px solid white", width: "100%", height: "100%", objectFit: "contain"
                        }} />
                        <p className="guide__step_instructions pt-2"><strong>{`Step${index + 1}: `}</strong><i>{item?.instructions}</i></p>
                    </div>)
                })
            }
            <p className="m-0 p-3" style={{ borderRadius: "10px", background: "rgba(0,0,0,0.1)", fontFamily: "var(--inter)" }}>
                We hope that with the help of these instructions, you'll be able to successfully download the desired video. Please note that our online video downloader supports specific websites, so ensure that the video you're trying to convert is included on our list of supported platforms. If you encounter any issues during the process, please don't hesitate to reach out to us through our contact page. We value your feedback and will gladly assist you. Thank you for using our service!
            </p>
        </div >
    );
}

export default Guide;