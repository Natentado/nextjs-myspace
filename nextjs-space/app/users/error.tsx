"use client";

const Error = ({error, reset}: {error: Error, reset: () => void}) => {

    return (
        <main>    
            <div>
                <h2>Something went wrong!</h2>
                <button onClick={() => reset()}>Try again</button>
            </div>
        </main>
    )
};

export default Error;