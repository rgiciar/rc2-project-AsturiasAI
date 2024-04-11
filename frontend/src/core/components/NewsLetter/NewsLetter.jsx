import "/src/core/components/NewsLetter/NewsLetter.css";

export const NewsLetter = () => {
    return (
        <div className='newsLetter'>
            <h2 className="tittle-newsletter">
                Subscribete a nuestro NewsLetter
            </h2>
            <iframe

                src="https://oliversanchezcasiano.substack.com/embed"
                width="480"
                height="150"
                frameborder="no"
                scrolling="no">
            </iframe>
        </div>
    );
};