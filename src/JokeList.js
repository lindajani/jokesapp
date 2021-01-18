import axios from "axios";
import { Component } from "react";

class JokeList extends Component {
    static defaultProps = {
        numJokesToGet: 10
    };
    constructor(props) {
    super(props);
    this.state = { jokes: [] };
}
    async componentDidMount()  {
        // Load Jokes
        let jokes = [];
        while (jokes.length < this.props.numJokesToGet) {
       let res = await axios.get("https://icanhazdadjoke.com", {headers: { Accept: "application/json"}
    });
    jokes.push(res.data.joke);
}
       console.log(jokes);
    }
    render() {
        return ( 
            <div>
                <hi>Dad Jokes</hi>
            </div>
        );
    }
}
export default JokeList;
