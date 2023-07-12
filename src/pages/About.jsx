import Brand from "../components/Brand/Brand";

const About = () => {
    return (
        <div className="container about">
            <header className="about__header p-3 ps-0">
                <p className="m-0 p-0 fw-bold" style={{ fontSize: "2rem", fontFamily: "var(--heads)" }}>About</p>
            </header>
            <article className="about__content">
                <ul style={{ listStyleType: "none", padding: 0, fontFamily: "var(--inter)" }}>
                    <li style={{ marginBottom: "20px" }}>
                        Welcome to our website, a reliable and efficient online video and audio downloader designed to enhance your browsing experience. We understand that you visit popular platforms like YouTube, Facebook, and TikTok regularly, and we are here to make it easier for you to download your favorite videos and music effortlessly. Our primary focus is on providing a seamless and user-friendly downloading experience. With our free and fast online downloader, you can now enjoy your preferred content offline, anytime and anywhere. Whether it's a captivating video or a catchy song, we've got you covered.
                    </li>
                    <li style={{ marginBottom: "20px" }}>
                        Gone are the days of complicated and time-consuming downloading methods. Our platform is designed to simplify the process, allowing you to retrieve your desired files in just a few clicks.Our service supports a wide range of formats, enabling you to choose the ideal file type for your videos and music. Whether you prefer MP4 for videos or MP3 for audios, our downloader offers the flexibility you need to enjoy your multimedia content on any device.
                    </li>
                    <li style={{ marginBottom: "20px" }}>
                        So, why wait? Experience the convenience of downloading your most cherished videos and music from your go-to websites. Join our growing community of users who trust our reliable and user-friendly online video and audio downloader. Start exploring and enjoying your multimedia content on your terms.
                        Thank you for choosing our website. We are dedicated to continuously improving our services to meet your needs. If you have any questions or suggestions, please don't hesitate to reach out to our friendly support team. Happy downloading!
                    </li>
                </ul>
            </article>
        </div>
    );
}

export default About;