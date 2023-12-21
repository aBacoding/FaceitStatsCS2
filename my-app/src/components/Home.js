import { SearchIcon } from "@chakra-ui/icons";
function Home() {
    return (
        <div className="home">
            <h1>FACEIT Stats</h1>
            <p>Enter your FACEIT nickname to see your stats!</p>
            <input type="text" placeholder="Enter Faceit nickname..." />
            <button>
                <SearchIcon style={{ marginRight: "5px" }} />
                Search
            </button>
        </div>
    );
}

export default Home;