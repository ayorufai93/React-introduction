function Greeting() {
    const name = "Rufai Faidat Ayomide";
    const Year = new Date().getFullYear();

    return(
        <div>
            <h1>Welcome to my React APP</h1>
            <p>My name is {name}</p>
            <p>Year:{Year}</p>
        </div>
    );
}
export default Greeting;