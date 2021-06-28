import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
    render() {
        let name = "React";
        return (
            <h1>It's {((num) => { return 1 + num; })(3)}!</h1>
        );
    }
    get_result(num) {
        return 1 + num;
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);